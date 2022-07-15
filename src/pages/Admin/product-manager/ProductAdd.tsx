import { Col, Divider, Image, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';
import Button from '~/components/Button';
import Input, { SizeInput } from '~/components/Input';
import PageHeader from '~/components/PageHeader';
import { mixins } from '~/GlobalClasses';
const ImageStyled = styled.div`
	${mixins.flexCenter}
`;
const ProductAdd = () => {
	return (
		<div>
			<PageHeader title={'Thêm sản phẩm mới'} />
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
						<TextArea showCount maxLength={100} style={{ height: 120 }} />
					</div>
				</Col>
				<Col flex={3}>
					<h2>Thông tin sản phẩm</h2>
					<Divider />
					<Input
						placeholder={'Tên sản phẩm'}
						label={<h2>Tên sản phẩm</h2>}
						required={true}
						size={SizeInput.LARGE}
						className='flex flex-col'
					/>
					<div className='flex justify-between gap-4'>
						<Input
							placeholder={'Giá gốc'}
							label={<h2>Giá gốc</h2>}
							type='number'
							required={true}
							size={SizeInput.LARGE}
							className='flex flex-col flex-1'
						/>
						<Input
							placeholder={'Giá khuyến mại'}
							label={<h2>Giá khuyến mại</h2>}
							type='number'
							required={true}
							size={SizeInput.LARGE}
							className='flex flex-col flex-1'
						/>
					</div>
					<Input
						placeholder={'Danh mục'}
						label={<h2>Danh mục</h2>}
						required={true}
						size={SizeInput.LARGE}
						className='flex flex-col w-1/2'
					/>
					<div>
						<h2>Đặc điểm nổi bật</h2>
						<TextArea showCount maxLength={100} style={{ height: 120 }} />
					</div>
					<div>
						<h2>Mô tả dài</h2>
						<TextArea showCount maxLength={100} style={{ height: 120 }} />
					</div>
					<div className='w-1/6 mt-3 p-2'>
						<Button color='#fff' bgColor='#096dd9' bgHover='#096dd9'>
							Thêm mới
						</Button>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default ProductAdd;
