import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdMailOutline, MdOutlineMail } from "react-icons/md";

const Button = (props) => {
	return (
		<button
			className={`text-white  rounded-lg  flex items-center justify-center p-1 gap-3 ${
				props.type === "pink" ? "bg-pink-500" : "bg-purple-600"
			}`}
		>
			{props.icon == "contact" ? (
				<MdOutlineMail size="16px" />
			) : (
				<FaGithub size="16px" />
			)}

			{props.button1}
		</button>
	);
};

export default Button; 