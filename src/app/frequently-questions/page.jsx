"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function page() {
  const [questions, setQuestions] = useState([
    {
      id: "1",
      question: "What is the return policy?",
      answer:
        "We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it for a full refund within 30 days of purchase.",
    },
    {
      id: "2",
      question: "What is the return policy?",
      answer:
        "We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it for a full refund within 30 days of purchase.",
    },
    {
      id: "3",
      question: "What is the return policy?",
      answer:
        "We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it for a full refund within 30 days of purchase.",
    },
    {
      id: "4",
      question: "What is the return policy?",
      answer:
        "We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it for a full refund within 30 days of purchase.",
    },
    {
      id: "5",
      question: "What is the return policy?",
      answer:
        "We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it for a full refund within 30 days of purchase.",
    },
    {
      id: "6",
      question: "What is the return policy?",
      answer:
        "We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it for a full refund within 30 days of purchase.",
    },
  ]);

  return (
    <>
      <div className="mt-[15px]  p-[35px_0px] border-t border-t-gray-200 border-b border-gray-200 text-center">
        <h1 className="text-[32px] font-bold mb-[5px] font-serif text">
          Frequently Asked Questions
        </h1>
        <Breadcrumb>
          <BreadcrumbList  className="justify-center font-semibold" >
            <BreadcrumbItem className="text-center text-black">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-center">
              <BreadcrumbLink className=" text-[#C09578]" href="/frequently-questions">
                Frequently Asked Questions
              </BreadcrumbLink>
            </BreadcrumbItem>         
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Accordion className="max-w-[1100px] w-[90%] mx-auto mt-[30px]">
        {questions.map((v) => {
          return (
            <AccordionItem className=" hover:bg-gray-100/20 transition-all duration-300 text-center border border-[#C09578] rounded-md my-2 p-2" key={v.id} value={v.id}>
              <AccordionTrigger className="text font-semibold capitalize hover:text-[#C09578] ">
                {v.question}
              </AccordionTrigger>
              <AccordionContent className="text-left text border-t border-t-gray-200 pt-2">
                {/* Yes. It adheres to the WAI-ARIA design pattern. */}
                {v.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
