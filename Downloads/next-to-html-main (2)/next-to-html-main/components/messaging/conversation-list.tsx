"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Pin } from "lucide-react"

interface Conversation {
  id: string
  participantName: string
  participantType: "advocate" | "client"
  lastMessage: string
  timestamp: string
  unreadCount: number
  caseTitle?: string
  isPinned?: boolean
  isOnline?: boolean
}

interface ConversationListProps {
  conversations: Conversation[]
  selectedConversation?: string
  onSelectConversation: (conversationId: string) => void
}

export function ConversationList({ conversations, selectedConversation, onSelectConversation }: ConversationListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.participantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.caseTitle?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const pinnedConversations = filteredConversations.filter((conv) => conv.isPinned)
  const regularConversations = filteredConversations.filter((conv) => !conv.isPinned)

  const ConversationItem = ({ conversation }: { conversation: Conversation }) => (
    <Card
      className={`cursor-pointer transition-colors hover:bg-muted/50 ${
        selectedConversation === conversation.id ? "ring-2 ring-primary bg-primary/5" : ""
      }`}
      onClick={() => onSelectConversation(conversation.id)}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{conversation.participantName.charAt(0)}</AvatarFallback>
            </Avatar>
            {conversation.isOnline && (
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium truncate">{conversation.participantName}</h4>
                {conversation.isPinned && <Pin className="w-3 h-3 text-muted-foreground" />}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                {conversation.unreadCount > 0 && (
                  <Badge className="h-5 min-w-5 text-xs px-1.5">
                    {conversation.unreadCount > 99 ? "99+" : conversation.unreadCount}
                  </Badge>
                )}
              </div>
            </div>

            {conversation.caseTitle && (
              <Badge variant="outline" className="text-xs mb-1">
                {conversation.caseTitle}
              </Badge>
            )}

            <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search conversations..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        {pinnedConversations.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground px-2">Pinned</h3>
            {pinnedConversations.map((conversation) => (
              <ConversationItem key={conversation.id} conversation={conversation} />
            ))}
          </div>
        )}

        {regularConversations.length > 0 && (
          <div className="space-y-2">
            {pinnedConversations.length > 0 && (
              <h3 className="text-sm font-medium text-muted-foreground px-2 mt-4">All Conversations</h3>
            )}
            {regularConversations.map((conversation) => (
              <ConversationItem key={conversation.id} conversation={conversation} />
            ))}
          </div>
        )}

        {filteredConversations.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No conversations found</p>
          </div>
        )}
      </div>
    </div>
  )
}
