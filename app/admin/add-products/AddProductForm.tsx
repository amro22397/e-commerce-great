"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import firebaseApp from "@/libs/firebase";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import axios from "axios";
import { useRouter } from "next/navigation";
import Input from "@/components/inputs/Input";
import TextArea from "@/components/inputs/TextArea";
import CustomCheckBox from "@/components/inputs/CustomCheckBox";

export type ImageType = {
    color: string;
    colorCode: string;
    image: File | null;
  };
  
  export type UploadedImageType = {
    color: string;
    colorCode: string;
    image: string;
  };

const AddProductForm = () => {

    const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<ImageType[] | null>();
  const [isProductCreated, setIsProductCreated] = useState(false);

  const {register, handleSubmit, setValue, watch, reset, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
        name: "",
      description: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
      price: "",
    }
  })

  return (
    <>
      <Heading title="Add a Product" center />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />
      <Input
        id="brand"
        label="Brand"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      
      <TextArea
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      
      <CustomCheckBox
        id="inStock"
        register={register}
        label="This product is in stock"
      />
    </>
  )
}

export default AddProductForm
