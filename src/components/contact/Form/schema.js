import Joi from "joi";
export const RegistrationVal = Joi.object({
  firstName: Joi.string().min(3).max(30).trim().required().messages({
    "string.empty": "الاسم الاول مطلوب*",
    "string.min": " يجب أن يكون الاسم أكبر من 3 أحرف",
    "string.max": "يجب أن يكون الاسم أقل من 30 حرفًا!",
  }),
  lastName: Joi.string().min(3).max(30).trim().required().messages({
    "string.empty": "الاسم الاوسط و الاخير مطلوب*",
    "string.min": " يجب أن يكون الاسم أكبر من 3 أحرف",
    "string.max": "يجب أن يكون الاسم أقل من 30 حرفًا!",
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty":
      "أدخل البريد الإلكتروني يجب أن يكون البريد الإلكتروني صالحا",
  }),
  phone: Joi.string().required().messages({
    "string.empty": "رقم الجوال مطلوب",
  }),
  password: Joi.string()
    .pattern(/^[A-Z][a-z0-9#@]{8,30}$/)
    .required()
    .messages({
      "string.pattern.base":
        "يجب أن تحتوي كلمة المرور على أحرف كبيرة: A-Z، أحرف صغيرة: a-z.الأرقام: 0-9",
      "string.empty": " قيمة مطلوبة *",
    }),
});
