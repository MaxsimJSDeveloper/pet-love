import { selectToken } from "@redux/users/selectors";
import Modal from "@shared/Modal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import attentionImages from "@assets/img/attentionModal/attentionImages";
import AuthNav from "@components/logic/AuthNav/AuthNav";
import { selectIsOpen } from "@redux/animals/selectors";
import { closeModal, openModal } from "@redux/animals/slice";
import { AppDispatch } from "@redux/store";
import { useLocation } from "react-router-dom";
import AttentionModalImgWrap from "@components/ui/AttentionModalImgWrap/AttentionModalImgWrap";

const ModalAttention = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSetIsOpen = () => {
    dispatch(closeModal());
  };

  const isOpen = useSelector(selectIsOpen);
  const token = useSelector(selectToken);
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      dispatch(openModal());
    }
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(closeModal());
  }, [location, dispatch]);

  return (
    <>
      {isOpen && !token ? (
        <Modal onClose={handleSetIsOpen}>
          <AttentionModalImgWrap images={attentionImages} />
          <h2 className="text-[20px] font-bold text-[#f6b83d] leading-[100%] tracking-[-0.03em] mb-[20px]">
            Attention
          </h2>
          <p className="text-[14px] leading-[123%] tracking-[-0.02em] text-center mb-[24px]">
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
          <AuthNav styles="flex" />
        </Modal>
      ) : null}
    </>
  );
};

export default ModalAttention;
