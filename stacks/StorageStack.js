import { Bucket, Table } from "@serverless-stack/resources";

export function StorageStack({ stack }) {
  // Create an S3 bucket
  const bucket = new Bucket(stack, "Uploads");

  // Create the DynamoDB table
  const table = new Table(stack, "Notes2", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  // Return the bucket and table resources
  return {
    table,
    bucket,
  };
}
