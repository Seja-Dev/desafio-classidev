"use client";

import React, { useTransition } from "react";
import { usePathname } from "next/navigation";

import { deletePost } from "@/lib/actions/post.actions";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeletePost = ({
  postId,
  children,
}: {
  postId: string;
  children?: React.ReactNode;
}) => {
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="flex items-center gap-2">
          <Image
            src="/assets/icons/delete.svg"
            alt="edit"
            width={20}
            height={20}
          />
          {children}
        </AlertDialogTrigger>

        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Tem certeza de que deseja excluir?
            </AlertDialogTitle>
            <AlertDialogDescription className=" text-gray-600">
              Isso excluirá permanentemente este anúncio
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>

            <AlertDialogAction
              onClick={() =>
                startTransition(async () => {
                  await deletePost({ postId, path: pathname });
                })
              }
            >
              {isPending ? "Deletando..." : "Deletar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeletePost;
