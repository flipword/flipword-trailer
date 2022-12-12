import React, {createRef, useEffect, useRef, useState} from 'react';
import {Img, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {ExtensionAddingPopup} from './ExtensionAddingPopup';
import {DiamondButton} from './button/DiamondButton';
import {WebsiteSceneEnum} from "../helpers/WebsiteSceneEnum";

export const ApplicationLayout: React.FC<{
	children: React.ReactNode
	websiteScene: WebsiteSceneEnum;
}> = (
	props
) => {
	const homeIcon = staticFile('icons/home.svg');
	const listIcon = staticFile('icons/list.svg');
	const settingsIcon = staticFile('icons/settings.svg');
	const identityIcon = staticFile('icons/identity.svg');

	return (
		<div className="w-full flex flex-col h-full overflow-auto">
			<div className="w-full flex-1">{props.children}</div>
			<div className="w-full flex flex-row h-16 bg-white justify-center items-center gap-9">
				<Img className="w-8" src={homeIcon}/>
				<Img className="w-8 h-auto text-white" src={listIcon} />
				<DiamondButton iconPath="icons/add.svg" />
				<Img className="w-8 h-auto" src={settingsIcon} />
				<Img className="w-8 h-auto" src={identityIcon} />
			</div>
		</div>
	);
};
