import { useAppForm } from "@/hooks";
import Avatar from "@/components/avatar/Avatar";
import Input from "@/components/inputs/Input";
import Radio from "@/components/inputs/Radio";
import DateInput from "@/components/inputs/DateInput";
import LoadingButton from "@/components/buttons/LoadingButton";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { editProfileSchema } from "./editProfileFormSchema";
import { useTranslation } from "react-i18next";

const EditProfileForm = ({ profile }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useAppForm(editProfileSchema, {
    fullname: profile?.fullname,
    phoneNumber: profile?.phoneNumber,
    gender: profile?.gender,
    birthday: profile?.birthday,
    avatar: profile?.avatar,
  });

  const avatar = watch("avatar");
  const [avtPreview, setAvtPreview] = useState();

  useEffect(() => {
    if (avatar) {
      setAvtPreview(
        typeof avatar === "object" ? URL.createObjectURL(avatar) : avatar,
      );
    }

    return () => {
      if (avatar) {
        URL.revokeObjectURL(avtPreview);
      }
    };
  }, [avatar]);

  const handleSaveProfile = async (data) => {
    console.log(data);
  };

  const handleRemoveAvatar = () => {
    URL.revokeObjectURL(avtPreview);
    setAvtPreview(null);
    setValue("avatar", "");
  };

  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      <form
        id="edit_profile"
        className="w-full text-sm"
        onSubmit={handleSubmit(handleSaveProfile)}
      >
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-2 lg:divide-x lg:divide-solid lg:divide-black/10">
          <div className="space-y-6 sr-530:space-y-8 lg:col-span-8 lg:pr-6">
            <div className="flex flex-col gap-1.5 sr-530:flex-row sr-530:gap-6">
              <label className="font-medium sr-530:w-2/5 sr-530:text-right sm:w-1/3">
                {t("account.edit-profile.fullName")}
                <span className="text-red-500">*</span>
              </label>
              <Input
                label="fullname"
                register={register}
                errors={errors}
                className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-1.5 sr-530:flex-row sr-530:gap-6">
              <label className="font-medium sr-530:w-2/5 sr-530:text-right sm:w-1/3">
                {t("account.edit-profile.phone")}
              </label>
              <Input
                label="phoneNumber"
                register={register}
                className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-1.5 sr-530:flex-row sr-530:gap-6">
              <label className="font-medium sr-530:w-2/5 sr-530:text-right sm:w-1/3">
                {t("account.edit-profile.gender")}
              </label>
              <Radio
                label="gender"
                control={control}
                options={[
                  {
                    label: "account.edit-profile.male",
                    value: "male",
                  },
                  {
                    label: "account.edit-profile.female",
                    value: "female",
                  },
                  {
                    label: "account.edit-profile.other",
                    value: "other",
                  },
                ]}
                translation={true}
              />
            </div>
            <div className="flex flex-col gap-1.5 sr-530:flex-row sr-530:gap-6">
              <label className="font-medium sr-530:w-2/5 sr-530:text-right sm:w-1/3">
                {t("account.edit-profile.birthday")}
              </label>
              <DateInput
                label="birthday"
                control={control}
                maxDate={new Date()}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 lg:col-span-4 lg:pl-6">
            <Avatar
              sx={{
                width: { xs: 95, sm: 120 },
                height: { xs: 95, sm: 120 },
                fontSize: { xs: 36, sm: 50 },
              }}
              image={avtPreview}
              name={profile?.fullname}
            />
            <div className="space-x-2.5">
              <Controller
                name="avatar"
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    id="upload_avatar"
                    onChange={(e) => field.onChange(e.target.files[0])}
                  />
                )}
              />
              <label
                htmlFor="upload_avatar"
                className="cursor-pointer rounded-md bg-secondary px-4 py-2.5 font-medium text-white hover:bg-[#4c2424]"
              >
                {t("account.edit-profile.upload")}
              </label>
              <label
                className="cursor-pointer rounded-md bg-gray-300 px-4 py-2.5 font-medium text-black hover:bg-gray-400"
                onClick={() => handleRemoveAvatar()}
              >
                {t("account.edit-profile.noAvt")}
              </label>
            </div>
            <p>{t("account.edit-profile.format")}</p>
          </div>
        </div>
      </form>
      <div className="w-full sr-530:flex sr-530:justify-center">
        <LoadingButton
          form="edit_profile"
          label={t("account.edit-profile.save")}
          loading={false}
          buttonClass="w-full rounded-md bg-main px-4 py-2 text-sm justify-center font-semibold text-white hover:bg-primary disabled:hover:bg-main sr-530:w-1/2 lg:w-fit lg:px-8"
        />
      </div>
    </div>
  );
};

export default EditProfileForm;
