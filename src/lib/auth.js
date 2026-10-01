import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { Resend } from 'resend';

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db('better-auth-db2');

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      void resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Reset your password",
        html: `
          <h2>Reset your password</h2>
          <p>Click the button below to reset your password.</p>
          <a href="${url}">
            Reset Password
          </a>
        `,
      });
    },
    onPasswordReset: async ({ user }, request) => {
      // your logic here
      console.log(`Password for user ${user.email} has been reset.`);
    },
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Verify your email address",
        html: `
          <h2>Verify your email</h2>
          <p>Click the button below to verify your email address.</p>
          <a href="${url}">
            Verify Email
          </a>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
      } else {
        console.log("Verification email sent:", data);
      }
    },

    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true,
    expiresIn: 3600,
  },

  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET,
    },
  },

  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});