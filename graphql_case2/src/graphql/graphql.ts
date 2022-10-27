
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract discord(): Nullable<Discord> | Promise<Nullable<Discord>>;

    abstract twitter(): Nullable<Twitter> | Promise<Nullable<Twitter>>;
}

export class Discord {
    getDiscordAccessToken?: Nullable<DiscordToken>;
    discordUser?: Nullable<DiscordUser>;
}

export class DiscordToken {
    access_token: string;
    token_type?: Nullable<string>;
    expires_in?: Nullable<number>;
    refresh_token?: Nullable<string>;
}

export class DiscordAccountInfo {
    id: string;
    username: string;
    discriminator: string;
    avatar?: Nullable<string>;
    mfa_enabled?: Nullable<boolean>;
    banner?: Nullable<string>;
    accent_color?: Nullable<string>;
    locale?: Nullable<string>;
    verified?: Nullable<boolean>;
    email?: Nullable<string>;
}

export class DiscordUser {
    timeJoined?: Nullable<DateTime>;
    activityNum?: Nullable<number>;
    numInvites?: Nullable<number>;
    numInvitesPerServer?: Nullable<number>;
    userCreatedAt?: Nullable<DateTime>;
    getUserByToken?: Nullable<DiscordAccountInfo>;
}

export class Twitter {
    getOAuth2Token?: Nullable<TwitterAccessToken>;
    getOAuth2TokenByRefresh?: Nullable<TwitterAccessToken>;
    twitterUser: TwitterUser;
    decoReplyToTweet?: Nullable<boolean>;
}

export class TwitterAccountMetrics {
    followers_count: number;
    following_count: number;
    listed_count: number;
    tweet_count: number;
}

export class TwitterAccessToken {
    access_token: string;
    expires_in?: Nullable<number>;
    refresh_token: string;
}

export class TwitterAccountInfo {
    id: string;
    name: string;
    username: string;
    profile_image_url: string;
    created_at: DateTime;
    public_metrics?: Nullable<TwitterAccountMetrics>;
}

export class TwitterUser {
    me: TwitterAccountInfo;
    avgFollowersD2: number;
    avgPostImpressions: number;
    sumLikes: number;
    isFollowing: boolean;
    numProjectPosts: number;
}

export type DateTime = any;
type Nullable<T> = T | null;
