# @forwardemail/mcp-server

[Model Context Protocol](https://github.com/modelcontextprotocol/specification) (MCP) server for [Forward Email](https://forwardemail.net). Connect AI assistants to your inbox.

## Overview

This package provides a local MCP server that wraps the [Forward Email API](https://forwardemail.net/email-api). It lets AI agents (Claude, ChatGPT, Cursor, Windsurf, and others) send email, manage domains, and read your inbox through natural language.

The server runs locally on your machine via `stdio`. Your API key never leaves your device.

## Install

```bash
npm install -g @forwardemail/mcp-server
```

Or run directly with `npx`:

```bash
npx @forwardemail/mcp-server
```

## Setup

### 1. Get your API key

Log in at <https://forwardemail.net/my-account/security> and copy your API key.

### 2. Set the environment variable

```bash
export FORWARD_EMAIL_API_KEY=your-api-key
```

### 3. Configure your AI client

#### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "forwardemail": {
      "command": "npx",
      "args": ["@forwardemail/mcp-server"],
      "env": {
        "FORWARD_EMAIL_API_KEY": "your-api-key"
      }
    }
  }
}
```

#### Cursor

Add to `.cursor/mcp.json` in your project:

```json
{
  "mcpServers": {
    "forwardemail": {
      "command": "npx",
      "args": ["@forwardemail/mcp-server"],
      "env": {
        "FORWARD_EMAIL_API_KEY": "your-api-key"
      }
    }
  }
}
```

## Available Tools

This server exposes the complete [Forward Email API](https://forwardemail.net/email-api) as MCP tools. Every endpoint is covered.

### Account

* `getAccount` - Get your account details
* `updateAccount` - Update your account

### Logs

* `downloadLogs` - Download email delivery logs

### Contacts (CardDAV)

* `listContacts` - List all contacts
* `createContact` - Create a contact
* `getContact` - Get a contact by ID
* `updateContact` - Update a contact
* `deleteContact` - Delete a contact

### Calendars (CalDAV)

* `listCalendars` - List all calendars
* `createCalendar` - Create a calendar
* `getCalendar` - Get a calendar by ID
* `updateCalendar` - Update a calendar
* `deleteCalendar` - Delete a calendar

### Calendar Events (CalDAV)

* `listCalendarEvents` - List all calendar events
* `createCalendarEvent` - Create a calendar event
* `getCalendarEvent` - Get a calendar event by ID
* `updateCalendarEvent` - Update a calendar event
* `deleteCalendarEvent` - Delete a calendar event

### Domains

* `listDomains` - List all domains
* `createDomain` - Create a new domain
* `getDomain` - Get a domain by ID or name
* `updateDomain` - Update a domain
* `deleteDomain` - Delete a domain
* `verifyDomainRecords` - Verify domain DNS records
* `verifySmtpRecords` - Verify domain SMTP records
* `testS3Connection` - Test custom S3 connection for a domain

### Domain Catch-All Passwords

* `listCatchAllPasswords` - List domain-wide catch-all passwords
* `createCatchAllPassword` - Create a domain-wide catch-all password
* `deleteCatchAllPassword` - Remove a domain-wide catch-all password

### Domain Invites

* `acceptDomainInvite` - Accept a domain invite
* `createDomainInvite` - Invite a user to a domain
* `removeDomainInvite` - Remove a domain invite

### Domain Members

* `updateDomainMember` - Update a domain member role
* `removeDomainMember` - Remove a member from a domain

### Aliases

* `listAliases` - List aliases for a domain
* `createAlias` - Create a new alias
* `getAlias` - Get an alias by ID
* `updateAlias` - Update an alias
* `deleteAlias` - Delete an alias
* `generateAliasPassword` - Generate or set a password for an alias

### Sieve Scripts

* `listSieveScripts` - List Sieve scripts for an alias
* `createSieveScript` - Create a Sieve script for an alias
* `getSieveScript` - Get a Sieve script by ID
* `updateSieveScript` - Update a Sieve script
* `deleteSieveScript` - Delete a Sieve script
* `activateSieveScript` - Activate a Sieve script

### Sieve Scripts (Alias Auth)

* `listSieveScriptsAliasAuth` - List Sieve scripts (alias auth)
* `createSieveScriptAliasAuth` - Create a Sieve script (alias auth)
* `getSieveScriptAliasAuth` - Get a Sieve script (alias auth)
* `updateSieveScriptAliasAuth` - Update a Sieve script (alias auth)
* `deleteSieveScriptAliasAuth` - Delete a Sieve script (alias auth)
* `activateSieveScriptAliasAuth` - Activate a Sieve script (alias auth)

### Emails (Outbound SMTP)

* `listEmails` - List outbound SMTP emails
* `sendEmail` - Send an email via outbound SMTP
* `getEmailLimit` - Get outbound SMTP email sending limit
* `getEmail` - Get an outbound SMTP email by ID
* `deleteEmail` - Delete an outbound SMTP email

### Messages (IMAP)

* `listMessages` - List and search messages in a folder
* `createMessage` - Create a new message (draft)
* `getMessage` - Get a message by ID
* `updateMessage` - Update a message
* `deleteMessage` - Delete a message

### Folders (IMAP)

* `listFolders` - List all folders
* `createFolder` - Create a new folder
* `getFolder` - Get a folder by ID
* `updateFolder` - Update a folder
* `deleteFolder` - Delete a folder

### Encrypt

* `encryptRecord` - Encrypt a plaintext Forward Email TXT record

## Development

```bash
git clone https://github.com/forwardemail/mcp-server.git
cd mcp-server
pnpm install
pnpm test
```

## License

[BUSL-1.1](LICENSE)

## Links

* [Forward Email](https://forwardemail.net)
* [Forward Email API Docs](https://forwardemail.net/email-api)
* [MCP Specification](https://github.com/modelcontextprotocol/specification)
* [MCP Landing Page](https://forwardemail.net/mcp)
