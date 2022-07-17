import { Checkbox, Form, Input, Typography } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '~/app/hooks';
import Button from '~/components/Button';
import Dialog from '~/components/Dialog';
import { signUp } from '../userSlice';

const { Title } = Typography;
type Props = {
	show: boolean;
	setShow: any;
};

const SignUpPage = ({ show, setShow }: Props) => {
	const dispatch = useAppDispatch();

	const handleOk = () => {
		setShow(false);
	};

	const handleCancel = () => {
		setShow(false);
	};
	const onFinish = (values?: any) => {
		dispatch(signUp(values));
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<Dialog
			title={<Title level={4}>Đăng kí</Title>}
			visible={show}
			handleOk={handleOk}
			handleCancel={handleCancel}
		>
			<Form
				layout='vertical'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 32 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				size='large'
			>
				<Form.Item
					label='Username'
					name='username'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item label='Phone' name='phone'>
					<Input />
				</Form.Item>

				<Form.Item
					label='Email'
					name='email'
					rules={[{ required: true, message: 'Please input your email!' }]}
				>
					<Input type='email' />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Button
					color={'#fff'}
					bgColor='#D70018'
					bgHover='#D70018'
					size='16px'
					padding='0.8em'
				>
					Đăng kí
				</Button>
			</Form>
		</Dialog>
	);
};

export default SignUpPage;
