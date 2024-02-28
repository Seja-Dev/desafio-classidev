"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validator";
import { postDefaultValues } from "@/constants";
import Dropdown from "./Dropdown";
import { Textarea } from "../ui/textarea";
import { useRouter } from "next/navigation";
import { createPost, updatePost } from "@/lib/actions/post.actions";
import { IPost } from "@/lib/database/models/post.model";

interface PostFormProps {
  userId: string;
  type: "Create" | "Update";
  post?: IPost;
  postId?: string;
}

const PostForm = ({ userId, type, post, postId }: PostFormProps) => {
  const router = useRouter();
  const initalValues =
    post && type === "Update"
      ? {
          ...post,
        }
      : postDefaultValues;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initalValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (type === "Create") {
      try {
        const newPost = await createPost({
          post: { ...values, categoryId: values.categoryId as string },
          userId,
          path: `/post`,
        });

        if (newPost) {
          form.reset();
          router.push(`/post/${newPost._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (type === "Update") {
      if (!postId) {
        router.back();
        return;
      }
      try {
        const updatedPost = await updatePost({
          userId,
          post: { ...values, _id: postId },
          path: `/post/${postId}`,
        });

        if (updatedPost) {
          form.reset();
          router.push(`/post/${updatedPost._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Nome do produto" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Preço"
                    {...field}
                    className=""
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tel"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Whatsapp"
                    {...field}
                    className=""
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Descrição"
                    {...field}
                    className=" rounded-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="bg-[#f28000] p-6 hover:bg-[#d39043]">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default PostForm;
