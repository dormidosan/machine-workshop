"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
//import { useChat } from "ai/react";
import { useChat } from "@ai-sdk/react";
import { DefaultButton, GhostButton } from "./buttons/DefaultButton";
//import { ButtonBase } from "./buttons/ButtonBase";
//import { Input } from "@/components/ui/input";
import { Card } from "@/components/Card";
//import { Button } from "@/components/ui/button";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-[300px] sm:w-[350px] h-[450px] flex flex-col">
          <div className="p-3 border-b flex justify-between items-center bg-gray-800 text-white rounded-t-lg">
            <h3 className="font-semibold">Chat con Metalyplast</h3>
            <GhostButton
              size="icon"
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </GhostButton>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
            />
            <DefaultButton type="submit" size="icon">
              <Send className="h-4 w-4" />
            </DefaultButton>
          </form>
        </Card>
      ) : (
        <div className="flex flex-col gap-2">
          <DefaultButton
            onClick={() => setIsOpen(true)}
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
          </DefaultButton>
          <a href={`https://wa.me/50375187650`} target="_blank" rel="noopener noreferrer">
            <DefaultButton
              size="icon"
              className="h-12 w-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </DefaultButton>
          </a>
        </div>
      )}
    </div>
  );
}
