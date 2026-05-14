"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  ArrowLeft,
  Filter,
  Archive,
  Star,
  Phone,
  Video,
  FileText,
  Image as ImageIcon,
  CheckCheck,
  MessageSquare,
} from "lucide-react";

interface AdvocateMessagesModuleProps {
  onNavigate: (section: string) => void;
}

export function AdvocateMessagesModule({
  onNavigate,
}: AdvocateMessagesModuleProps) {
  const [selectedChat, setSelectedChat] = useState<string | null>("1");
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const conversations = [
    {
      id: "1",
      clientName: "Rajesh Sharma",
      lastMessage: "Thank you for your consultation. When can we meet?",
      time: "10 min ago",
      unread: 2,
      caseTitle: "Property Dispute",
      online: true,
      pinned: true,
      archived: false,
      hasAttachment: false,
    },
    {
      id: "2",
      clientName: "Priya Patel",
      lastMessage: "I've uploaded the documents you requested",
      time: "1 hour ago",
      unread: 0,
      caseTitle: "Employment Law",
      online: false,
      pinned: false,
      archived: false,
      hasAttachment: true,
    },
    {
      id: "3",
      clientName: "Amit Kumar",
      lastMessage: "What are the next steps in the process?",
      time: "2 hours ago",
      unread: 1,
      caseTitle: "Contract Review",
      online: true,
      pinned: false,
      archived: false,
      hasAttachment: false,
    },
    {
      id: "4",
      clientName: "Sunita Verma",
      lastMessage: "Can we schedule a video call tomorrow?",
      time: "3 hours ago",
      unread: 0,
      caseTitle: "Family Law",
      online: false,
      pinned: false,
      archived: true,
      hasAttachment: false,
    },
  ];

  const messages = [
    {
      id: "1",
      sender: "client",
      text: "Hello Advocate, I need your help with a property dispute case.",
      time: "10:30 AM",
      read: true,
      attachment: null,
    },
    {
      id: "2",
      sender: "me",
      text: "Hello Rajesh, I'd be happy to help. Can you provide more details about the dispute?",
      time: "10:35 AM",
      read: true,
      attachment: null,
    },
    {
      id: "3",
      sender: "client",
      text: "My neighbor has encroached on my property. I have all the documents.",
      time: "10:40 AM",
      read: true,
      attachment: null,
    },
    {
      id: "4",
      sender: "me",
      text: "Perfect. Please upload the property documents and we can schedule a consultation.",
      time: "10:45 AM",
      read: true,
      attachment: null,
    },
    {
      id: "5",
      sender: "client",
      text: "Thank you for your consultation. When can we meet?",
      time: "11:00 AM",
      read: false,
      attachment: null,
    },
    {
      id: "6",
      sender: "client",
      text: "I've attached the property documents for your review.",
      time: "11:15 AM",
      read: false,
      attachment: {
        name: "property_documents.pdf",
        size: "2.4 MB",
        type: "pdf",
      },
    },
  ];

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch =
      conv.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.caseTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "unread" && conv.unread > 0) ||
      (activeTab === "archived" && conv.archived);
    return matchesSearch && matchesTab && !conv.archived;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
          <p className="text-sm text-gray-600">Communicate with your clients</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onNavigate("overview")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Conversations</p>
                <p className="text-2xl font-bold">{conversations.length}</p>
              </div>
              <Badge className="bg-blue-100 text-blue-700">Active</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold">
                  {conversations.reduce((acc, conv) => acc + conv.unread, 0)}
                </p>
              </div>
              <Badge className="bg-amber-100 text-amber-700">New</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Archived</p>
                <p className="text-2xl font-bold">
                  {conversations.filter((c) => c.archived).length}
                </p>
              </div>
              <Archive className="w-6 h-6 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search messages..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all" className="text-xs">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="text-xs">
                    Unread
                    {conversations.filter((c) => c.unread > 0).length > 0 && (
                      <Badge className="ml-1 px-1.5 py-0 text-xs">
                        {conversations.filter((c) => c.unread > 0).length}
                      </Badge>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="archived" className="text-xs">
                    Archived
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y max-h-[600px] overflow-y-auto">
              {filteredConversations.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <p className="text-sm">No conversations found</p>
                </div>
              ) : (
                filteredConversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`p-4 cursor-pointer transition-colors relative ${
                      selectedChat === conv.id
                        ? "bg-primary/5 border-l-4 border-l-primary"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedChat(conv.id)}
                  >
                    {conv.pinned && (
                      <Star className="absolute top-2 right-2 w-3 h-3 fill-amber-500 text-amber-500" />
                    )}
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                            {conv.clientName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conv.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-sm truncate">
                            {conv.clientName}
                          </p>
                          {conv.unread > 0 && (
                            <Badge className="bg-primary text-white px-2 py-0 text-xs">
                              {conv.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                          {conv.caseTitle}
                          {conv.hasAttachment && (
                            <Paperclip className="w-3 h-3" />
                          )}
                        </p>
                        <p className="text-xs text-gray-600 truncate">
                          {conv.lastMessage}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {conv.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 flex flex-col h-[700px]">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        RS
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Rajesh Sharma</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-gray-500">
                          Property Dispute
                        </p>
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        <p className="text-xs text-green-600">Online</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" title="Voice Call">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" title="Video Call">
                      <Video className="w-4 h-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Star className="w-4 h-4 mr-2" />
                          Pin Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Archive className="w-4 h-4 mr-2" />
                          Archive Chat
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <FileText className="w-4 h-4 mr-2" />
                          Block Client
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === "me"
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      {msg.attachment && (
                        <div className="mt-2 p-2 bg-white/10 rounded border border-white/20 flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium truncate">
                              {msg.attachment.name}
                            </p>
                            <p className="text-xs opacity-70">
                              {msg.attachment.size}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <p
                          className={`text-xs ${
                            msg.sender === "me"
                              ? "text-white/70"
                              : "text-gray-500"
                          }`}
                        >
                          {msg.time}
                        </p>
                        {msg.sender === "me" && (
                          <CheckCheck
                            className={`w-3 h-3 ${
                              msg.read ? "text-blue-300" : "text-white/50"
                            }`}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                        <span
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></span>
                        <span
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex items-end gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <FileText className="w-4 h-4 mr-2" />
                        Attach Document
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Attach Image
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Textarea
                    placeholder="Type your message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        // Handle send message
                        setMessageText("");
                      }
                    }}
                    className="min-h-[60px] resize-none"
                  />
                  <Button
                    size="icon"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => {
                      if (messageText.trim()) {
                        // Handle send message
                        setMessageText("");
                      }
                    }}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium">
                  Select a conversation to start messaging
                </p>
                <p className="text-sm mt-2">
                  Choose from your existing conversations on the left
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
