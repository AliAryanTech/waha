import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ChatIdApiParam } from '@waha/nestjs/params/ChatIdApiParam';
import { MessageIdApiParam } from '@waha/nestjs/params/MessageIdApiParam';
import {
  SessionApiParam,
  WorkingSessionParam,
} from '@waha/nestjs/params/SessionApiParam';
import { PaginationParams } from '@waha/structures/pagination.dto';

import { SessionManager } from '../core/abc/manager.abc';
import { WhatsappSession } from '../core/abc/session.abc';
import { parseBool } from '../helpers';
import {
  ChatsPaginationParams,
  GetChatMessageQuery,
  GetChatMessagesQuery,
} from '../structures/chats.dto';
import { EditMessageRequest } from '../structures/chatting.dto';

@ApiSecurity('api_key')
@Controller('api/:session/chats')
@ApiTags('💬 Chats')
@UsePipes(new ValidationPipe({ transform: true }))
class ChatsController {
  constructor(private manager: SessionManager) {}

  @Get('')
  @SessionApiParam
  @ApiOperation({ summary: 'Get chats' })
  getChats(
    @WorkingSessionParam session: WhatsappSession,
    @Query() pagination: ChatsPaginationParams,
  ) {
    return session.getChats(pagination);
  }

  @Delete(':chatId')
  @SessionApiParam
  @ApiOperation({ summary: 'Deletes the chat' })
  @ChatIdApiParam
  deleteChat(
    @WorkingSessionParam session: WhatsappSession,
    @Param('chatId') chatId: string,
  ) {
    return session.deleteChat(chatId);
  }

  @Get(':chatId/messages')
  @SessionApiParam
  @ApiOperation({ summary: 'Gets messages in the chat' })
  @ChatIdApiParam
  getChatMessages(
    @Query() query: GetChatMessagesQuery,
    @WorkingSessionParam session: WhatsappSession,
    @Param('chatId') chatId: string,
  ) {
    const downloadMedia = parseBool(query.downloadMedia);
    return session.getChatMessages(chatId, query.limit, downloadMedia);
  }

  @Get(':chatId/messages/:messageId')
  @SessionApiParam
  @ApiOperation({ summary: 'Gets message by id' })
  @ChatIdApiParam
  async getChatMessage(
    @Query() query: GetChatMessageQuery,
    @WorkingSessionParam session: WhatsappSession,
    @Param('chatId') chatId: string,
    @Param('messageId') messageId: string,
  ) {
    const message = await session.getChatMessage(chatId, messageId, query);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }

  @Delete(':chatId/messages')
  @SessionApiParam
  @ApiOperation({ summary: 'Clears all messages from the chat' })
  @ChatIdApiParam
  clearMessages(
    @WorkingSessionParam session: WhatsappSession,
    @Param('chatId') chatId: string,
  ) {
    return session.clearMessages(chatId);
  }

  @Delete(':chatId/messages/:messageId')
  @SessionApiParam
  @ChatIdApiParam
  @MessageIdApiParam
  @ApiOperation({ summary: 'Deletes a message from the chat' })
  deleteMessage(
    @WorkingSessionParam session: WhatsappSession,
    @Param('chatId') chatId: string,
    @Param('messageId') messageId: string,
  ) {
    return session.deleteMessage(chatId, messageId);
  }

  @Put(':chatId/messages/:messageId')
  @SessionApiParam
  @ChatIdApiParam
  @MessageIdApiParam
  @ApiOperation({ summary: 'Edits a message in the chat' })
  editMessage(
    @WorkingSessionParam session: WhatsappSession,
    @Param('chatId') chatId: string,
    @Param('messageId') messageId: string,
    @Body() body: EditMessageRequest,
  ) {
    return session.editMessage(chatId, messageId, body);
  }

  @Post(':chatId/archive')
  @SessionApiParam
  @ChatIdApiParam
  @ApiOperation({ summary: 'Archive the chat' })
  archiveChat(
    @WorkingSessionParam session: WhatsappSession,
    @Param('chatId') chatId: string,
  ) {
    return session.chatsArchiveChat(chatId);
  }

  @Post(':chatId/unarchive')
  @SessionApiParam
  @ChatIdApiParam
  @ApiOperation({ summary: 'Unarchive the chat' })
  unarchiveChat(
    @WorkingSessionParam session: WhatsappSession,
    @Param('chatId') chatId: string,
  ) {
    return session.chatsUnarchiveChat(chatId);
  }

  @Post(':chatId/unread')
  @SessionApiParam
  @ChatIdApiParam
  @ApiOperation({ summary: 'Unread the chat' })
  unreadChat(
    @WorkingSessionParam session: WhatsappSession,
    @Param('chatId') chatId: string,
  ) {
    return session.chatsUnreadChat(chatId);
  }
}

export { ChatsController };
