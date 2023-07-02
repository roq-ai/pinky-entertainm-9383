import * as yup from 'yup';

export const gamingValidationSchema = yup.object().shape({
  game_name: yup.string().required(),
  description: yup.string(),
  company_id: yup.string().nullable(),
});
