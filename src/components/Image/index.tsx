type Props = {
	onChange: (event: any) => void;
	imgPreview: string;
	img?: string;
};

const Image = ({ onChange, imgPreview, img }: Props) => {
	return (
		<div className='flex justify-center items-center w-full'>
			<label
				htmlFor='dropzone-file'
				className='flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100 dark:border-gray-500'
			>
				{imgPreview !== '' || img ? (
					<img src={imgPreview || img} />
				) : (
					<div className='flex flex-col justify-center items-center pt-5 pb-6'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='mb-3 w-10 h-10 text-gray-400'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 6v6m0 0v6m0-6h6m-6 0H6'
							/>
						</svg>
						<p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
							<span className='font-semibold'>Click to upload</span> or drag and
							drop
						</p>
						<p className='text-xs text-gray-500 dark:text-gray-400'>
							SVG, PNG, JPG or GIF (MAX. 800x400px)
						</p>
					</div>
				)}

				<input
					id='dropzone-file'
					name='image'
					type='file'
					className='opacity-0'
					onChange={onChange}
					accept='image/png, image/jpg, image/jpeg, image/gif'
				/>
			</label>
		</div>
	);
};

export default Image;
