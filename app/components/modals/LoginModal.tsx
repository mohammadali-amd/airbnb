'use client';

import { signIn } from 'next-auth/react';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './Modal';
import Heading from '../navbar/Heading';
import Input from '../input/Input';
import Button from '../Button';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
   const router = useRouter();
   const registerModal = useRegisterModal();
   const loginModal = useLoginModal();

   const [isLoading, setIsLoading] = useState(false);

   const {
      register,
      handleSubmit,
      formState: {
         errors,
      }
   } = useForm<FieldValues>({
      defaultValues: {
         email: '',
         password: '',
      }
   });

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      signIn('credentials', {
         ...data,
         redirect: false
      })
         .then((callback => {
            setIsLoading(false);

            if (callback?.ok) {
               toast.success('Loged in');
               router.refresh();
               loginModal.onClose();
            }

            if (callback?.error) {
               toast.error(callback.error);
            }
         }))
   }

   const bodyContent = (
      <div className="flex flex-col gap-4">
         <Heading
            title='Welcome back!'
            subtitle='Login to your account!'
         />
         <Input
            id='email'
            label='Email'
            disable={isLoading}
            register={register}
            errors={errors}
            required
         />
         <Input
            id='password'
            type='password'
            label='Password'
            disable={isLoading}
            register={register}
            errors={errors}
            required
         />
      </div>
   )

   const footerContent = (
      <div className="flex flex-col gap-4 mt-3">
         <hr />
         <Button
            outline
            label='Continue with Google'
            icon={FcGoogle}
            onClick={() => { }}
         />
         <Button
            outline
            label='Continue with Github'
            icon={AiFillGithub}
            onClick={() => { }}
         />
         <div className="text-neutral-500 text-center mt-4 font-light">
            <div className='flex flex-row items-center justify-center gap-2'>
               <div>
                  You don&apos;t have an account?
               </div>
               <div onClick={loginModal.onClose} className='text-neutral-800 cursor-pointer hover:underline'>
                  Sign up
               </div>
            </div>
         </div>
      </div>
   )

   return (
      <Modal
         disabled={isLoading}
         isOpen={loginModal.isOpen}
         title="Login"
         actionLabel="Continue"
         onClose={loginModal.onClose}
         onSubmit={handleSubmit(onSubmit)}
         body={bodyContent}
         footer={footerContent}
      />
   );
}

export default LoginModal;