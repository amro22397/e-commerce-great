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
import { categories } from "@/utils/Categories";
import CategoryInput from "@/components/inputs/CategoryInput";
import { setConstantValue } from "typescript";
import { colors } from "@/utils/colors";

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

  const category = watch('category');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
    })
  }

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

      <div className="font-medium w-full">
      <div className="mb-2 font-semibold">Select a Category</div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h[50vh] overflow-y-auto">
        {categories.map((item) => {
            if (item.label === "All") {
                return null
            }

            return (
                <div className="col-span" key={item.label}>
                    <CategoryInput
                    onClick={(category) => setCustomValue('category', category)}
                    selected={category === item.label}
                    label={item.label}
                    icon={item.icon}
                    />
                </div>
            )
        })}
      </div>
      </div>

      <div className="w-full flex flex-col flex-wrap gap-4">
        <div className="">
        <div className="font-bold">
            Select the available product colors and upload their images.
          </div>
          <div className="text-sm">
            You must upload an image for each of the color selected otherwise
            your color selection will be ignored.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {colors.map((item, index) => {
            return (
              <></>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default AddProductForm
