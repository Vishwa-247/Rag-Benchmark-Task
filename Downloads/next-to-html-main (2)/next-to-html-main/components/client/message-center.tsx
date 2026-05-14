"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Reply, Archive, Trash2, MessageSquarePlus } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  from: string
  fromType: "advocate" | "client"
  subject: string
  preview: string
  date: string
  isRead: boolean
  caseTitle?: string
}

export function MessageCenter() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data - replace with actual data from backend
  const inboxMessages: Message[] = [
    {
      id: "1",
      from: "Adv. Rajesh Kumar",
      fromType: "advocate",
      subject: "Regarding your property dispute case",
      preview: "I have reviewed your case details and would like to discuss the legal options available...",
      date: "2 hours ago",
      isRead: false,
      caseTitle: "Property Boundary Dispute",
    },
    {
      id: "2",
      from: "Adv. Priya Sharma",
      fromType: "advocate",
      subject: "Initial consultation scheduled",
      preview: "Thank you for choosing our services. I have scheduled our initial consultation for...",
      date: "1 day ago",
      isRead: true,
      caseTitle: "Divorce Proceedings",
    },
    {
      id: "3",
      from: "Adv. Amit Patel",
      fromType: "advocate",
      subject: "Document requirements",
      preview: "Please provide the following documents for your case: 1. Property deed 2. Tax receipts...",
      date: "3 days ago",
      isRead: true,
      caseTitle: "Property Boundary Dispute",
    },
  ]

  const sentMessages: Message[] = [
    {
      id: "4",
      from: "You",
      fromType: "client",
      subject: "Additional case details",
      preview: "I wanted to provide some additional information about my case that might be relevant...",
      date: "1 day ago",
      isRead: true,
      caseTitle: "Property Boundary Dispute",
    },
  ]

  const MessageList = ({ messages }: { messages: Message[] }) => (
    <div className="space-y-2">
      {messages.map((message) => (
        <Card
          key={message.id}
          className={`cursor-pointer transition-colors hover:bg-muted/50 ${
            !message.isRead ? "border-primary/50 bg-primary/5" : ""
          } ${selectedMessage === message.id ? "ring-2 ring-primary" : ""}`}
          onClick={() => setSelectedMessage(message.id)}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{message.from.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className={`font-medium ${!message.isRead ? "font-semibold" : ""}`}>{message.from}</p>
                  <p className="text-sm text-muted-foreground">{message.date}</p>
                </div>
              </div>
              {!message.isRead && <div className="w-2 h-2 bg-primary rounded-full" />}
            </div>
            <h4 className={`font-medium mb-1 ${!message.isRead ? "font-semibold" : ""}`}>{message.subject}</h4>
            {message.caseTitle && (
              <Badge variant="outline" className="mb-2 text-xs">
                {message.caseTitle}
              </Badge>
            )}
            <p className="text-sm text-muted-foreground line-clamp-2">{message.preview}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Message Center</h2>
        <Link href="/messages">
          <Button>
            <MessageSquarePlus className="h-4 w-4 mr-2" />
            Open Full Messaging
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">Unread Messages</span>
            </div>
            <p className="text-2xl font-bold mt-1">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Active Conversations</span>
            </div>
            <p className="text-2xl font-bold mt-1">5</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">Response Time</span>
            </div>
            <p className="text-2xl font-bold mt-1">2h</p>
          </CardContent>
        </Card>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search messages..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Tabs defaultValue="inbox" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="inbox">Inbox</TabsTrigger>
              <TabsTrigger value="sent">Sent</TabsTrigger>
            </TabsList>
            <TabsContent value="inbox" className="mt-4">
              <MessageList messages={inboxMessages} />
            </TabsContent>
            <TabsContent value="sent" className="mt-4">
              <MessageList messages={sentMessages} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-2">
          {selectedMessage ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Message Details</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Reply className="h-4 w-4 mr-1" />
                      Reply
                    </Button>
                    <Button variant="outline" size="sm">
                      <Archive className="h-4 w-4 mr-1" />
                      Archive
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm">
                    This is where the full message content would be displayed. The message details, attachments, and
                    conversation history would appear here.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Reply</h4>
                  <Textarea placeholder="Type your reply..." className="min-h-24" />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Save Draft</Button>
                    <Button>Send Reply</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">Select a message to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
