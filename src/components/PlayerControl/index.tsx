import { Affix, Slider } from 'antd';

type Props = {};

const PlayerControl = (props: Props) => {
    return (
        <Affix
            offsetBottom={10}
            style={{ zIndex: 2, position: 'absolute', bottom: 0, left: 0, right: 0 }}
        >
            <div className="bg-[#fff] rounded-lg mx-5 sm:mx-20">
                <div className="border-b border-slate-100 dark:bg-slate-800 dark:border-slate-500 lg:p-6 p-2 rounded-t-xl">
                    <div>
                        <div className="relative">
                            <div className="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <Slider
                                    defaultValue={30}
                                    disabled={false}
                                    className="bg-cyan-500 dark:bg-cyan-400 w-full h-2"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                            <div className="text-cyan-500 dark:text-slate-100">24:16</div>
                            <div className="text-slate-500 dark:text-slate-400">75:50</div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
                    <div className="flex-auto flex items-center justify-evenly">
                        <button type="button" aria-label="Add to favorites">
                            <svg width={24} height={24}>
                                <path
                                    d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="hidden sm:block lg:hidden xl:block"
                            aria-label="Previous"
                        >
                            <svg width={24} height={24} fill="none">
                                <path
                                    d="m10 12 8-6v12l-8-6Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 6v12"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button type="button" aria-label="Rewind 10 seconds">
                            <svg width={24} height={24} fill="none">
                                <path
                                    d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5 5v3.111c0 .491.398.889.889.889H9"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <button className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full  shadow-md flex items-center justify-center">
                        <svg width={30} height={32} fill="currentColor">
                            <rect x={6} y={4} width={4} height={24} rx={2} />
                            <rect x={20} y={4} width={4} height={24} rx={2} />
                        </svg>
                    </button>
                    <div className="flex-auto flex items-center justify-evenly">
                        <button type="button" aria-label="Skip 10 seconds">
                            <svg width={24} height={24} fill="none">
                                <path
                                    d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="hidden sm:block lg:hidden xl:block"
                            aria-label="Next"
                        >
                            <svg width={24} height={24} fill="none">
                                <path
                                    d="M14 12 6 6v12l8-6Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 6v12"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500"
                        >
                            1x
                        </button>
                    </div>
                </div>
            </div>
        </Affix>
    );
};

export default PlayerControl;
