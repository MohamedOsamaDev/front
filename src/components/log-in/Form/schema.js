import Joi from "joi";
export const logInVal = Joi.object({
  identifier: Joi.string().min(3).max(30).trim().required().messages({
    "string.empty": "الاسم الاول مطلوب*",
    "string.min": " يجب أن يكون الاسم أكبر من 3 أحرف",
    "string.max": "يجب أن يكون الاسم أقل من 30 حرفًا!",
  }),
  password: Joi.string().min(8).max(30).trim().required().messages({
    "string.pattern.base":
      "يجب أن تحتوي كلمة المرور على أحرف كبيرة: A-Z، أحرف صغيرة: a-z.الأرقام: 0-9",
    "string.empty": " قيمة مطلوبة *",
  }),
});
