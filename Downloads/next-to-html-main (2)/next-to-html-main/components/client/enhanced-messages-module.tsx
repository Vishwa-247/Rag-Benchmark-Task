"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Star,
  Archive,
  Trash2,
  Filter,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Video,
  FileText,
  Download,
  Eye,
  Users,
  Calendar,
} from "lucide-react";

interface EnhancedMessagesModuleProps {
  onNavigate?: (section: string) => void;
}

interface Message {
  id: string;
  from: string;
  fromType: "advocate" | "client" | "system";
  subject: string;
  preview: string;
  content: string;
  date: string;
  time: string;
  isRead: boolean;
  isStarred: boolean;
  caseTitle?: string;
  caseId?: string;
  attachments?: { name: string; size: string; type: string }[];
  priority: "low" | "medium" | "high";
  avatar?: string;
}

interface Conversation {
  id: string;
  participantName: string;
  participantType: "advocate" | "client";
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  caseTitle?: string;
  isOnline: boolean;
  avatar?: string;
  messages: Message[];
}

export function EnhancedMessagesModule({
  onNavigate,
}: EnhancedMessagesModuleProps) {
  const [activeTab, setActiveTab] = useState("inbox");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >(null);
  const [messageFilter, setMessageFilter] = useState("all");
  const [newMessage, setNewMessage] = useState("");
  const [selectedMessages, setSelectedMessages] = useState<string[]>([]);

  // Mock data - replace with actual data from backend
  const messageStats = {
    total: 48,
    unread: 8,
    starred: 12,
    archived: 5,
    thisWeek: 15,
    avgResponseTime: "2.1 hours",
    activeConversations: 6,
  };

  const conversations: Conversation[] = [
    {
      id: "1",
      participantName: "Adv. Rajesh Kumar",
      participantType: "advocate",
      lastMessage:
        "I have reviewed your property documents and found several key points...",
      lastMessageTime: "2 hours ago",
      unreadCount: 2,
      caseTitle: "Property Boundary Dispute",
      isOnline: true,
      avatar: "/avatars/adv1.jpg",
      messages: [
        {
          id: "m1",
          from: "Adv. Rajesh Kumar",
          fromType: "advocate",
          subject: "Property Document Review",
          preview: "I have reviewed your property documents...",
          content:
            "Dear Client, I have thoroughly reviewed your property documents and found several key points that strengthen your case. The survey report clearly shows the boundary lines, and I believe we have a strong position.",
          date: "Today",
          time: "2:30 PM",
          isRead: false,
          isStarred: false,
          caseTitle: "Property Boundary Dispute",
          caseId: "case-1",
          priority: "high",
          attachments: [
            { name: "legal_analysis.pdf", size: "2.1 MB", type: "pdf" },
            { name: "boundary_map.jpg", size: "856 KB", type: "image" },
          ],
        },
      ],
    },
    {
      id: "2",
      participantName: "Adv. Priya Sharma",
      participantType: "advocate",
      lastMessage:
        "The next hearing is scheduled for next Monday. Please bring...",
      lastMessageTime: "1 day ago",
      unreadCount: 0,
      caseTitle: "Divorce Proceedings",
      isOnline: false,
      avatar: "/avatars/adv2.jpg",
      messages: [],
    },
    {
      id: "3",
      participantName: "Adv. Amit Patel",
      participantType: "advocate",
      lastMessage: "I need additional employment records for your case...",
      lastMessageTime: "2 days ago",
      unreadCount: 1,
      caseTitle: "Employment Contract Dispute",
      isOnline: true,
      avatar: "/avatars/adv3.jpg",
      messages: [],
    },
  ];

  const inboxMessages: Message[] = [
    {
      id: "1",
      from: "Adv. Rajesh Kumar",
      fromType: "advocate",
      subject: "Urgent: Property Document Review",
      preview:
        "I have reviewed your property documents and found several key points that strengthen your case...",
      content: "Full message content here...",
      date: "Today",
      time: "2:30 PM",
      isRead: false,
      isStarred: true,
      caseTitle: "Property Boundary Dispute",
      caseId: "case-1",
      priority: "high",
      attachments: [
        { name: "legal_analysis.pdf", size: "2.1 MB", type: "pdf" },
      ],
    },
    {
      id: "2",
      from: "Adv. Priya Sharma",
      fromType: "advocate",
      subject: "Hearing Schedule Update",
      preview:
        "The next hearing is scheduled for next Monday at 11:00 AM. Please bring all required documents...",
      content: "Full message content here...",
      date: "Yesterday",
      time: "4:15 PM",
      isRead: true,
      isStarred: false,
      caseTitle: "Divorce Proceedings",
      caseId: "case-2",
      priority: "medium",
    },
    {
      id: "3",
      from: "System",
      fromType: "system",
      subject: "Case Response Received",
      preview:
        "You have received a new response on your Employment Contract case...",
      content: "Full message content here...",
      date: "2 days ago",
      time: "11:20 AM",
      isRead: true,
      isStarred: false,
      priority: "low",
    },
  ];

  const sentMessages: Message[] = [
    {
      id: "4",
      from: "You",
      fromType: "client",
      subject: "Additional Case Information",
      preview:
        "I wanted to provide some additional details about my employment contract...",
      content: "Full message content here...",
      date: "Yesterday",
      time: "9:45 AM",
      isRead: true,
      isStarred: false,
      caseTitle: "Employment Contract Dispute",
      priority: "medium",
    },
  ];

  const filteredMessages = (messages: Message[]) => {
    return messages.filter((message) => {
      const matchesSearch =
        message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.from.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter =
        messageFilter === "all" ||
        (messageFilter === "unread" && !message.isRead) ||
        (messageFilter === "starred" && message.isStarred) ||
        (messageFilter === "priority" && message.priority === "high");

      return matchesSearch && matchesFilter;
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-accent/10 text-accent";
      case "low":
        return "bg-primary/10 text-primary";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4 text-destructive" />;
      case "image":
        return <Eye className="h-4 w-4 text-primary" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const currentConversation = conversations.find(
    (conv) => conv.id === selectedConversation
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Messages</h2>
          <p className="text-gray-600">Communicate with your legal team</p>
        </div>
        <Button>
          <MessageSquare className="h-4 w-4 mr-2" />
          Compose Message
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Messages</p>
                <p className="text-2xl font-bold">{messageStats.total}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xs text-primary mt-2">
              +{messageStats.thisWeek} this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread</p>
                <p className="text-2xl font-bold">{messageStats.unread}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-secondary" />
            </div>
            <p className="text-xs text-gray-600 mt-2">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Chats</p>
                <p className="text-2xl font-bold">
                  {messageStats.activeConversations}
                </p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xs text-primary mt-2">Online advocates</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Response Time</p>
                <p className="text-2xl font-bold">
                  {messageStats.avgResponseTime}
                </p>
              </div>
              <Clock className="h-8 w-8 text-secondary" />
            </div>
            <p className="text-xs text-gray-600 mt-2">Average response</p>
          </CardContent>
        </Card>
      </div>

      {/* Messages Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="flex-shrink-0 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Conversations</CardTitle>
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={messageFilter} onValueChange={setMessageFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Messages</SelectItem>
                    <SelectItem value="unread">Unread Only</SelectItem>
                    <SelectItem value="starred">Starred</SelectItem>
                    <SelectItem value="priority">High Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-3">
              <div className="space-y-2">
                {conversations.map((conversation) => (
                  <Button
                    key={conversation.id}
                    variant={
                      selectedConversation === conversation.id
                        ? "default"
                        : "ghost"
                    }
                    className="w-full h-auto p-3 justify-start"
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={conversation.avatar || undefined} />
                          <AvatarFallback>
                            {conversation.participantName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-sm truncate">
                            {conversation.participantName}
                          </p>
                          <div className="flex items-center gap-1">
                            {conversation.unreadCount > 0 && (
                              <Badge
                                variant="destructive"
                                className="text-xs px-1.5 py-0.5"
                              >
                                {conversation.unreadCount}
                              </Badge>
                            )}
                            <span className="text-xs text-gray-500">
                              {conversation.lastMessageTime}
                            </span>
                          </div>
                        </div>
                        {conversation.caseTitle && (
                          <p className="text-xs text-primary mb-1">
                            {conversation.caseTitle}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 truncate">
                          {conversation.lastMessage}
                        </p>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            {currentConversation ? (
              <>
                {/* Chat Header */}
                <CardHeader className="flex-shrink-0 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={currentConversation.avatar || undefined}
                          />
                          <AvatarFallback>
                            {currentConversation.participantName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {currentConversation.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {currentConversation.participantName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {currentConversation.isOnline
                            ? "Online"
                            : "Last seen 2 hours ago"}
                        </p>
                        {currentConversation.caseTitle && (
                          <p className="text-xs text-primary">
                            Case: {currentConversation.caseTitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {currentConversation.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.fromType === "client"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.fromType === "client"
                              ? "bg-primary text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          {message.attachments &&
                            message.attachments.length > 0 && (
                              <div className="mt-2 space-y-1">
                                {message.attachments.map(
                                  (attachment, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center gap-2 p-2 bg-white bg-opacity-20 rounded"
                                    >
                                      {getFileIcon(attachment.type)}
                                      <span className="text-xs">
                                        {attachment.name}
                                      </span>
                                      <span className="text-xs opacity-70">
                                        ({attachment.size})
                                      </span>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-6 w-6 p-0"
                                      >
                                        <Download className="h-3 w-3" />
                                      </Button>
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                          <p className="text-xs opacity-70 mt-1">
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Message Input */}
                <div className="flex-shrink-0 border-t p-4">
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="min-h-[60px] resize-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Button size="sm">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <CardContent className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Select a Conversation
                  </h3>
                  <p className="text-gray-600">
                    Choose a conversation from the list to start messaging
                  </p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
