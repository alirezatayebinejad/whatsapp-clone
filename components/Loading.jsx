import React from "react";

function Loading() {
	return (
		<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
			<img style={{ width: "100px" }} src="../spinner.gif" alt="" />
		</div>
	);
}

export default Loading;
