import Joi from "joi";
export const requsetVal = Joi.object({
  services: Joi.number()
    .min(1)
    .max(300000000000000000000000)
    .required()
    .messages({
      "string.empty": "الاسم الاول مطلوب*",
      "string.min": " يجب أن يكون الاسم أكبر من 3 أحرف",
      "string.max": "يجب أن يكون الاسم أقل من 30 حرفًا!",
    }),

  governorate: Joi.string().min(3).max(30).trim().required().messages({
    "string.empty": "الاسم الاول مطلوب*",
    "string.min": " يجب أن يكون الاسم أكبر من 3 أحرف",
    "string.max": "يجب أن يكون الاسم أقل من 30 حرفًا!",
  }),

  region: Joi.string().min(3).max(30).trim().required().messages({
    "string.empty": "الاسم الاول مطلوب*",
    "string.min": " يجب أن يكون الاسم أكبر من 3 أحرف",
    "string.max": "يجب أن يكون الاسم أقل من 30 حرفًا!",
  }),

  information: Joi.string().min(3).max(30).trim().required().messages({
    "string.empty": "الاسم الاول مطلوب*",
    "string.min": " يجب أن يكون الاسم أكبر من 3 أحرف",
    "string.max": "يجب أن يكون الاسم أقل من 30 حرفًا!",
  }),
  media: Joi.any(),
});
