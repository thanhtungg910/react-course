import { Checkbox, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';
interface Props {
	onFinish: (value: any) => void;
}
const FormCheckout = ({ onFinish }: Props) => {
	const [indeterminate, setIndeterminate] = useState(false);

	return (
		<Form
			onFinish={onFinish}
			layout='vertical'
			className='grid grid-cols-6 gap-4'
		>
			<div className='col-span-3'>
				<Form.Item
					label='User Name'
					name='user_name'
					className='block mb-1 text-sm text-gray-600'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input className='rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5' />
				</Form.Item>
			</div>
			<div className='col-span-3'>
				<Form.Item
					label='Last Name'
					name='last_name'
					className='block mb-1 text-sm text-gray-600'
					rules={[{ required: true, message: 'Please input your last name!' }]}
				>
					<Input className='rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5' />
				</Form.Item>
			</div>
			<div className='col-span-6'>
				<Form.Item
					label='Email'
					name='email'
					className='block mb-1 text-sm text-gray-600'
					rules={[{ required: true, message: 'Please input your email!' }]}
				>
					<Input
						type='email'
						className='rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5'
					/>
				</Form.Item>
			</div>
			<div className='col-span-6'>
				<Form.Item
					label='Phone'
					name='phone'
					className='block mb-1 text-sm text-gray-600'
					rules={[{ required: true, message: 'Please input your phone!' }]}
				>
					<Input
						type='number'
						className='rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5'
					/>
				</Form.Item>
			</div>
			<div className='col-span-6'>
				<Form.Item
					label='Delivery Address'
					name='delivery_address'
					className='block mb-1 text-sm text-gray-600'
					rules={[
						{ required: true, message: 'Please input your delivery address!' },
					]}
				>
					<TextArea
						autoSize={{ minRows: 3, maxRows: 5 }}
						className='rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5'
					/>
				</Form.Item>
			</div>
			<div className='col-span-6'>
				<Form.Item name='payment_on_delivery' valuePropName='checked'>
					<Checkbox defaultChecked={true}>Thanh toán khi nhận hàng</Checkbox>
				</Form.Item>
			</div>
			{indeterminate && (
				<>
					<fieldset className='col-span-6'>
						<legend className='block mb-1 text-sm text-gray-600'>
							Card Details
						</legend>
						<div className='-space-y-px bg-white rounded-lg shadow-sm'>
							<div>
								<label className='sr-only' htmlFor='card-number'>
									Card Number
								</label>
								<input
									className='border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400'
									type='text'
									name='card-number'
									id='card-number'
									placeholder='Card number'
								/>
							</div>
							<div className='flex -space-x-px'>
								<div className='flex-1'>
									<label className='sr-only' htmlFor='card-expiration-date'>
										Expiration Date
									</label>
									<input
										className='border-gray-200 relative rounded-bl-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400'
										type='text'
										name='card-expiration-date'
										id='card-expiration-date'
										placeholder='MM / YY'
									/>
								</div>
								<div className='flex-1'>
									<label className='sr-only' htmlFor='card-cvc'>
										CVC
									</label>
									<input
										className='border-gray-200 relative rounded-br-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400'
										type='text'
										name='card-cvc'
										id='card-cvc'
										placeholder='CVC'
									/>
								</div>
							</div>
						</div>
					</fieldset>
					<fieldset className='col-span-6'>
						<legend className='block mb-1 text-sm text-gray-600'>
							Billing Address
						</legend>
						<div className='-space-y-px bg-white rounded-lg shadow-sm'>
							<div>
								<label className='sr-only' htmlFor='country'>
									Country
								</label>
								<select
									className='border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5'
									id='country'
									name='country'
									autoComplete='country-name'
								>
									<option>England</option>
									<option>Wales</option>
									<option>Scotland</option>
									<option>France</option>
									<option>Belgium</option>
									<option>Japan</option>
								</select>
							</div>
							<div>
								<label className='sr-only' htmlFor='postal-code'>
									ZIP/Post Code
								</label>
								<input
									className='border-gray-200 relative rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400'
									type='text'
									name='postal-code'
									id='postal-code'
									autoComplete='postal-code'
									placeholder='ZIP/Post Code'
								/>
							</div>
						</div>
					</fieldset>
				</>
			)}

			<div className='col-span-6'>
				<button
					className='rounded-lg bg-[#DC3545] text-sm p-2.5 text-white w-full block'
					type='submit'
				>
					Đặt hàng
				</button>
			</div>
		</Form>
	);
};

export default FormCheckout;
