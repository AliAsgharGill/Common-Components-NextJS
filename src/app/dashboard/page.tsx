"use client";
import React, { useEffect, useState } from "react";
import CommonCard from "../components/common/UiComponents/Card";
import CommonInput from "../components/common/FormComponents/Input";
import CommonButton from "../components/common/UiComponents/Button";
import CommonModal from "../components/common/UiComponents/Modal";
import Image from "next/image";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const HomePage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [icon, setIcon] = useState(false);

  useEffect(() => {}, [icon]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <CommonCard className="mb-2 h-1/3 w-1/4">
        <h2 className="text-xl mb-2">Sign In</h2>
        <div className=" flex flex-col justify-center items-center">
          <CommonInput
            label="Email"
            placeholder="Email"
            type="email"
            className="mb-2"
          />
          <CommonInput
            label="Password"
            placeholder="Password"
            type="password"
            className="mb-4 "
          />
          <CommonButton
            onClick={() => alert("Signed in!")}
            variant="primary"
            className="w-1/2"
          >
            Sign In
          </CommonButton>
        </div>
      </CommonCard>
      {/* 2nd card */}
      <h2 className="font-bold text-2xl py-3">Another Card</h2>
      <CommonCard
        className="w-1/6"
        header={<CardHeader />}
        footer={<CardFooter />}
      >
        <div className="relative">
          {icon ? (
            <MdFavorite
              size={30}
              className=" absolute right-2 m-4 text-white  cursor-pointer"
              onClick={() => setIcon(icon === true ? false : true)}
            />
          ) : (
            <MdFavoriteBorder
              size={30}
              className=" absolute right-2 m-4 text-white  hover:text-red-400 cursor-pointer"
              onClick={() => setIcon(icon === false ? true : false)}
            />
          )}

          <Image
            src={"/one.jpg"}
            height={100}
            width={600}
            alt="cardImage"
            className="w-full h-full object-cover rounded p-0 m-0 "
          ></Image>
        </div>
        <h2 className="font-bold text-xl pt-1">Cart Title Here</h2>
        <h2 className="">Subtitle Here</h2>
      </CommonCard>

      {/* modal */}
      <CommonButton
        onClick={() => setModalOpen(true)}
        variant="secondary"
        className="mt-4"
      >
        Open Modal
      </CommonButton>
      <CommonModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        className="w-1/2 h-1/2"
      >
        <div className="flex text-black ">
          <div>
            <h2 className="text-xl mb-4 font-bold ">This is title</h2>
            <p className="text-justify p-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sequi ratione cum quibusdam aperiam vero error iure praesentium
              delectus consectetur? Sed obcaecati neque voluptas nisi
              architecto, ducimus aliquid aspernatur qui excepturi. Distinctio
              odit cum eius sequi enim magnam nulla explicabo unde in dolore.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              explicabo? Dicta, ab iure alias placeat ducimus fugit doloremque
              distinctio, iusto omnis eaque architecto esse beatae sit
              asperiores, nisi aliquid illum!
            </p>
          </div>
          <div>
            <h2 className="text-xl mb-4">Another Detail</h2>
            <p className="text-justify p-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
              illum sequi illo, ducimus facilis, autem, laborum ad adipisci ab
              maxime facere eaque placeat saepe repellat explicabo assumenda
              eius quos. Laudantium eius qui quae nobis vitae. Omnis, alias
              delectus! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Dolorum repudiandae reprehenderit autem placeat repellat
              quia provident vero praesentium velit nemo aspernatur cumque,
              amet, debitis eligendi corporis earum quis, optio quasi!
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center  space-x-4 mt-10 ">
          <CommonButton
            onClick={() => setModalOpen(false)}
            variant="primary"
            className="mt-4 w-1/4 "
          >
            Close
          </CommonButton>
          <CommonButton
            onClick={() => setModalOpen(false)}
            variant="primary"
            className="mt-4 bg-green-500 hover:bg-green-700 w-1/4"
          >
            Save
          </CommonButton>
        </div>
      </CommonModal>
    </div>
  );
};

export default HomePage;

const CardHeader = () => {
  return (
    <>
      <h1>Card Header</h1>
    </>
  );
};

const CardFooter = () => {
  return (
    <>
      <div className="flex justify-around">
        <CommonButton
          variant="primary"
          className="w-1/2 bg-gray-500 hover:bg-gray-700"
          onClick={() => alert("Buy Now")}
        >
          Buy Now
        </CommonButton>
      </div>
    </>
  );
};
