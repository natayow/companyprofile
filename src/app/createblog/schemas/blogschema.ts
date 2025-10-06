import * as Yup from 'yup';

export const blogSchema = Yup.object().shape({
    title: Yup.string()
    .required('Title is required')
    .max(100, 'Character limit is 100'),
    imgurl: Yup.string()
    .required('Image URL is required')
    .url('Invalid URL format'),
    
    blogdate: Yup.date()
    .required('Blog date is required')
    .max(new Date(), 'Blog date cannot be in the future'),
    summary: Yup.string()
    .required('Summary is required')
    .max(300, 'Character limit is 300'),
    body: Yup.string()
    .required('Body is required')
    .min(100, 'Body must have minimum 100 characters')
    .max(5000, 'Character limit is 5000')
})