import { useState, useEffect } from "react";
import { FriendsItemProps } from "./FriendsItem.types";

const FriendsItem = ({ friend }: FriendsItemProps) => {
  const [formattedAddress, setFormattedAddress] = useState<string | null>(null);
  const [formattedEmail, setFormattedEmail] = useState<string | null>(null);
  const [formattedPhone, setFormattedPhone] = useState<string | null>(null);

  const { title, imageUrl, email, phone, address } = friend;

  useEffect(() => {
    const formatData = () => {
      if (address) {
        setFormattedAddress(address.split(" ").slice(0, 2).join(" "));
      } else {
        setFormattedAddress("Remove");
      }

      if (email) {
        setFormattedEmail(email.slice(0, 18));
      } else {
        setFormattedEmail("Unknown");
      }

      if (phone) {
        setFormattedPhone(phone.slice(0, 15));
      } else {
        setFormattedPhone("No phone");
      }
    };

    formatData();
  }, [address, email, phone]);

  return (
    <div className="rounded-[15px] h-[184px] bg-white flex justify-center items-center px-[20px] gap-[14px]">
      <img
        className="rounded-[100%] w-[80px] h-[80px]"
        src={imageUrl}
        alt={title}
      />
      <div>
        <h2 className="text-[16px] font-bold leading-[125%] tracking-[-0.04em] mb-[14px]">
          {title}
        </h2>
        <p>
          <span className="text-date-color">Email: </span>
          {formattedEmail}
        </p>
        <p>
          <span className="text-date-color">Phone: </span>
          {formattedPhone}
        </p>
        <p>
          <span className="text-date-color">Address: </span>
          {formattedAddress}
        </p>
      </div>
    </div>
  );
};

export default FriendsItem;
