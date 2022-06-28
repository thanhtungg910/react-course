import { Affix, Slider } from 'antd';

type Props = {};

const PlayerControl = (props: Props) => {
    return (
        <div className="fixed right-0 left-0 bottom-0 z-1 h-[90px]">
            <div className="flex h-full">
                <div className="player-controls-left flex-1 bg-text1 h-full"></div>
                <div className="player-controls-bar flex-1 bg-[#f00] h-full"></div>
                <div className="player-controls-right flex-1 bg-[#ccc] h-full"></div>
            </div>
        </div>
    );
};

export default PlayerControl;
