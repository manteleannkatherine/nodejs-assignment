// import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
// import { Formik, Field, Form } from 'formik';
// import { gql, useMutation, useQuery } from '@apollo/client';
// import { CREATE_CATEGORY, GET_CATEGORY } from '../../quries/category.queries';

const CategoryForm: React.VFC = () => {
	// const [createCategory, { data, loading, error }] =
	// 	useMutation(CREATE_CATEGORY);

	// return (
	// 	<Formik
	// 		initialValues={{ name: '' }}
	// 		onSubmit={(values, actions) => {
	// 			setTimeout(() => {
	// 				alert(JSON.stringify(values, null, 2));

	// 				createCategory({
	// 					variables: { createCategoryData: values },
	// 				});
	// 				actions.setSubmitting(false);
	// 			}, 1000);
	// 		}}>
	// 		{(props) => (
	// 			<Form>
	// 				<Field name="name">
	// 					{({ field, form }: any) => (
	// 						<FormControl isInvalid={form.errors.name && form.touched.name}>
	// 							<FormLabel htmlFor="category_name">Cagetory Name:</FormLabel>
	// 							<Input {...field} id="name" placeholder="Enter Category" />
	// 						</FormControl>
	// 					)}
	// 				</Field>
	// 				<Button
	// 					mt={4}
	// 					colorScheme="teal"
	// 					isLoading={props.isSubmitting}
	// 					type="submit">
	// 					Submit
	// 				</Button>
	// 			</Form>
	// 		)}
	// 	</Formik>
	// );
	return <></>;
};

export default CategoryForm;
