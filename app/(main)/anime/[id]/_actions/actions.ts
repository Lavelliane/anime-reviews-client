'use server'

import { ReviewSchemaAction } from "@/schemas/ReviewSchema";
import { revalidateTag } from "next/cache";
import z from "zod";
import { createServerAction } from "zsa";

export const createReviewAction = createServerAction()
  .input(ReviewSchemaAction)
  .output(z.object({ success: z.boolean() }))
  .handler(async ({ input }) => {
    console.log(input)
    return { success: true };
  });
