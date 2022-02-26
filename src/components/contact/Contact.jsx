import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 mx-auto px-6 text-black"
		>
			<input {...register("firstName", { required: true })} />
			{errors.firstName?.type === "required" && (
				<p className="text-red-500">First name is required</p>
			)}
			<input {...register("lastName", { required: true })} />
			{errors.lastName && "Last name is required"}
			<input type="number" {...register("age", { min: 1, max: 99 })} />
			<input type="submit" />
		</form>
	);
};

export default Contact;
