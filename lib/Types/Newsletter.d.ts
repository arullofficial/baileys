import { proto } from "../../WAProto"

export type NewsletterReactionMode = "ALL" | "BASIC" | "NONE"
export type NewsletterState = "ACTIVE" | "GEOSUSPENDED" | "SUSPENDED"
export type NewsletterVerification = "VERIFIED" | "UNVERIFIED"
export type NewsletterMute = "ON" | "OFF" | "UNDEFINED"
export type NewsletterViewRole = "ADMIN" | "GUEST" | "OWNER" | "SUBSCRIBER"

export type NewsletterViewerMetadata = {
  mute: NewsletterMute
  view_role: NewsletterViewRole
}

export type NewsletterMetadata = {
  /** jid of newsletter */
  id: string
  /** state of newsletter */
  state: NewsletterState
  /** creation timestamp of newsletter */
  creation_time: number
  /** name of newsletter */
  name: string
  /** timestamp of last name modification of newsletter */
  nameTime: number
  /** description of newsletter */
  description: string
  /** timestamp of last description modification of newsletter */
  descriptionTime: number
  /** invite code of newsletter */
  invite: string
  /** direct path of picture */
  picture: string | null
  /** direct path of picture preview (lower quality) */
  preview: string | null
  /** reaction mode of newsletter */
  reaction_codes?: NewsletterReactionMode
  /** subscribers count of newsletter */
  subscribers: number
  /** verification state of newsletter */
  verification: NewsletterVerification
  /** viewer metadata */
  viewer_metadata: NewsletterViewerMetadata
}

export type SubscriberAction = "promote" | "demote"

export type ReactionModeUpdate = {
  reaction_codes: {
    blocked_codes: null
    enabled_ts_sec: null
    value: NewsletterReactionMode
  }
}

/** only exists reaction mode update */
export type NewsletterSettingsUpdate = ReactionModeUpdate

export type NewsletterReaction = {
  count: number
  code: string
}

export type NewsletterFetchedUpdate = {
  /** id of message in newsletter, starts from 100 */
  server_id: string
  /** count of views in this message */
  views?: number
  /** reactions in this message */
  reactions: NewsletterReaction[]
  /** the message, if you requested only updates, you will not receive message */
  message?: proto.IWebMessageInfo
}

export const MexOperations = {
  PROMOTE: "NotificationNewsletterAdminPromote",
  DEMOTE: "NotificationNewsletterAdminDemote",
  UPDATE: "NotificationNewsletterUpdate"
} as const

export const XWAPaths = {
  PROMOTE: "xwa2_notify_newsletter_admin_promote",
  DEMOTE: "xwa2_notify_newsletter_admin_demote",
  ADMIN_COUNT: "xwa2_newsletter_admin",
  CREATE: "xwa2_newsletter_create",
  NEWSLETTER: "xwa2_newsletter",
  SUBSCRIBED: "xwa2_newsletter_subscribed",
  METADATA_UPDATE: "xwa2_notify_newsletter_on_metadata_update"
} as const

export const QueryIds = {
  JOB_MUTATION: "120363407086048404",
  METADATA: "120363425287276536",
  UNFOLLOW: "120363425608572347",
  FOLLOW: "120363423044288688",
  UNMUTE: "120363425994469760",
  MUTE: "120363425994469760",
  CREATE: "120363404258144013",
  ADMIN_COUNT: "120363404258144013",
  CHANGE_OWNER: "120363425994469760",
  DELETE: "120363423044288688",
  DEMOTE: "120363425608572347",
  SUBSCRIBED: "120363407086048404"
} as const
