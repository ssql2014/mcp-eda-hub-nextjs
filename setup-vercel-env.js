// Script to help set up Vercel environment variables
// Run this after Chrome is installed for Puppeteer

const envVars = {
  DATABASE_URL: {
    value: "YOUR_DATABASE_CONNECTION_STRING",
    target: ["production", "preview", "development"],
    type: "encrypted",
    comment: "PostgreSQL connection string from Supabase/Neon"
  },
  EMAIL_USER: {
    value: "ssql2014@gmail.com",
    target: ["production", "preview", "development"],
    type: "plain",
    comment: "Gmail address for sending notifications"
  },
  EMAIL_PASS: {
    value: "YOUR_GMAIL_APP_PASSWORD",
    target: ["production", "preview", "development"],
    type: "encrypted",
    comment: "Gmail app-specific password (16 characters)"
  },
  NEXTAUTH_SECRET: {
    value: "YOUR_GENERATED_SECRET",
    target: ["production", "preview", "development"],
    type: "encrypted",
    comment: "Generate with: openssl rand -base64 32"
  },
  NEXTAUTH_URL: {
    value: "https://mcp-eda-hub-latest.vercel.app",
    target: ["production"],
    type: "plain",
    comment: "Production URL for NextAuth"
  },
  NEXT_PUBLIC_URL: {
    value: "https://mcp-eda-hub-latest.vercel.app",
    target: ["production", "preview", "development"],
    type: "plain",
    comment: "Public URL for email links"
  }
};

console.log("Vercel Environment Variables to Set:");
console.log("====================================\n");

Object.entries(envVars).forEach(([key, config]) => {
  console.log(`${key}:`);
  console.log(`  Value: ${config.value}`);
  console.log(`  Target: ${config.target.join(", ")}`);
  console.log(`  Type: ${config.type}`);
  console.log(`  Note: ${config.comment}`);
  console.log("");
});

console.log("\nSteps to set these in Vercel:");
console.log("1. Go to: https://vercel.com/ssql2014/mcp-eda-hub-nextjs/settings/environment-variables");
console.log("2. Click 'Add Variable' for each one");
console.log("3. Enter the key, value, and select environments");
console.log("4. Click 'Save' after each variable");
console.log("5. Redeploy your application\n");

// Export for potential automation
module.exports = envVars;