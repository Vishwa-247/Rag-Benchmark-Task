"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ConversationList } from "@/components/messaging/conversation-list";
import { ChatInterface } from "@/components/messaging/chat-interface";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquarePlus, Settings } from "lucide-react";

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<
    string | undefined
  >(undefined);

  // Mock data - replace with actual data from backend
  const conversations = [
    {
      id: "1",
      participantName: "Adv. Rajesh Kumar",
      participantType: "advocate" as const,
      lastMessage:
        "I'll need the property deed and tax receipts for the last 3 years...",
      timestamp: "10:40 AM",
      unreadCount: 2,
      caseTitle: "Property Boundary Dispute",
      isPinned: true,
      isOnline: true,
    },
    {
      id: "2",
      participantName: "Adv. Priya Sharma",
      participantType: "advocate" as const,
      lastMessage:
        "Thank you for choosing our services. I have scheduled our initial consultation...",
      timestamp: "Yesterday",
      unreadCount: 0,
      caseTitle: "Divorce Proceedings",
      isPinned: false,
      isOnline: false,
    },
    {
      id: "3",
      participantName: "Adv. Amit Patel",
      participantType: "advocate" as const,
      lastMessage:
        "The court hearing has been scheduled for next Monday at 10 AM...",
      timestamp: "2 days ago",
      unreadCount: 1,
      caseTitle: "Contract Dispute",
      isPinned: false,
      isOnline: true,
    },
  ];

  const selectedConv = conversations.find(
    (conv) => conv.id === selectedConversation
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600 mt-1">
              Communicate with your legal team
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button>
              <MessageSquarePlus className="w-4 h-4 mr-2" />
              New Message
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <ConversationList
              conversations={conversations}
              selectedConversation={selectedConversation}
              onSelectConversation={setSelectedConversation}
            />
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            {selectedConv ? (
              <ChatInterface
                conversationId={selectedConv.id}
                participantName={selectedConv.participantName}
                participantType={selectedConv.participantType}
                caseTitle={selectedConv.caseTitle}
              />
            ) : (
              <Card className="h-full">
                <CardContent className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MessageSquarePlus className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Select a conversation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Choose a conversation from the list to start messaging
                    </p>
                    <Button>Start New Conversation</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
