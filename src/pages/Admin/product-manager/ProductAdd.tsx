import { Col, Divider, Form, Image, message, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { memo } from 'react';
import styled from 'styled-components';
import { useAddProductMutation } from '~/api/product.api';

import Button from '~/components/Button';
import Input, { SizeInput } from '~/components/Input';
import PageHeader from '~/components/PageHeader';
import { mixins } from '~/GlobalClasses';

const ImageStyled = styled.div`
	${mixins.flexCenter}
`;
const ProductAdd = () => {
	const [addProduct, { isLoading, isSuccess }] = useAddProductMutation();
	if (isSuccess) {
		message.success('Tạo sản phẩm thành công');
	}
	const onFinish = (values: any) => {
		addProduct(values);
	};

	return (
		<div>
			<PageHeader title={'Thêm sản phẩm mới'} />
			<Form onFinish={onFinish} autoComplete='off'>
				<Row gutter={20}>
					<Col flex={2}>
						<ImageStyled>
							<Image
								width={200}
								preview={false}
								src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
							/>
						</ImageStyled>
						<div className='short-desc'>
							<h2>Mô tả ngắn</h2>
							<Form.Item name='desc_short'>
								<TextArea showCount maxLength={100} style={{ height: 120 }} />
							</Form.Item>
						</div>
					</Col>
					<Col flex={3}>
						<h2 className='text-xl'>Thông tin sản phẩm</h2>
						<Divider />
						<Input
							placeholder={'Tên sản phẩm'}
							label={<h2>Tên sản phẩm</h2>}
							required={true}
							size={SizeInput.LARGE}
							message='Please input your username!'
							className='flex flex-col'
							name='name'
						/>
						<Divider />
						<div className='flex justify-between gap-4'>
							<Input
								placeholder={'Giá gốc'}
								label={<h2>Giá gốc</h2>}
								type='number'
								required={true}
								size={SizeInput.LARGE}
								name='originalPrice'
								className='flex flex-col flex-1'
							/>
							<Input
								placeholder={'Giá khuyến mại'}
								label={<h2>Giá khuyến mại</h2>}
								type='number'
								required={true}
								size={SizeInput.LARGE}
								name='saleOffPrice'
								className='flex flex-col flex-1'
							/>
						</div>
						<Divider className='border-inherit' />
						<div>
							<h2>Danh mục</h2>
							<Form.Item name='category'>
								<Select className='w-1/2' allowClear size='large'>
									<Select.Option value='0'>Điện thoại</Select.Option>
									<Select.Option value='1'>Laptop</Select.Option>
									<Select.Option value='2'>Phụ kiện</Select.Option>
								</Select>
							</Form.Item>
						</div>
						<Divider className='border-inherit' />
						<div>
							<h2>Đặc điểm nổi bật</h2>
							<Form.Item name='feature'>
								<TextArea showCount maxLength={100} style={{ height: 120 }} />
							</Form.Item>
						</div>
						<Divider className='border-inherit' />
						<div>
							<h2>Mô tả dài</h2>
							<Form.Item name='description'>
								<TextArea showCount maxLength={100} style={{ height: 120 }} />
							</Form.Item>
						</div>
						<Divider className='border-inherit' />
						<div className='w-1/6 mt-3 p-2'>
							<Button
								color='#fff'
								bgColor='#096dd9'
								bgHover='#096dd9'
								size={'18px'}
							>
								Thêm mới
							</Button>
						</div>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export default memo(ProductAdd);
