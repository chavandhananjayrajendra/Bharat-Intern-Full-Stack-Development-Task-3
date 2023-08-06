import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appId = 894221941;
    const serverSecret = "b63809d67370e67a856466481836e509";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Dhananjay Chavan"
    );

    const zegoCloud = ZegoUIKitPrebuilt.create(kitToken);
    zegoCloud.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <>
    <div>
      <div  ref={myMeeting} />
    </div>
    </>
  );
};

export default RoomPage;
