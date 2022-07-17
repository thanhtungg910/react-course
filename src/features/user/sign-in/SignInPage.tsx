import { Checkbox, Form, Input, Typography } from 'antd';
import { useAppDispatch } from '~/app/hooks';
import Button from '~/components/Button';
import Dialog from '~/components/Dialog';
import { User } from '~/types/user';
import { login } from '../userSlice';

const { Text, Title } = Typography;
type Props = {
	show: boolean;
	setShow: any;
	onClick: () => void;
};

const SignInPage = ({ show, setShow, onClick }: Props) => {
	const dispatch = useAppDispatch();

	const handleOk = () => {
		setShow(false);
	};
	const handleCancel = () => {
		setShow(false);
	};
	const onFinish = (values: User) => {
		dispatch(login(values));
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<Dialog
			title={<Title level={4}>Đăng nhập</Title>}
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

				<Form.Item name='remember' valuePropName='checked'>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Button
					color={'#fff'}
					bgColor='#D70018'
					bgHover='#D70018'
					size='16px'
					padding='0.8em'
				>
					Đăng nhập
				</Button>
				<Button
					color={'#fff'}
					bgColor='#0050b3'
					bgHover='#0050b3'
					size='16px'
					className=' my-4'
					padding='0.8em'
				>
					Đăng nhập với tài khoản Google
				</Button>
				<Text>Bạn chưa có tài khoản? </Text>
				<Text strong className='cursor-pointer' onClick={onClick}>
					Đăng kí
				</Text>
			</Form>
		</Dialog>
	);
};

export default SignInPage;
