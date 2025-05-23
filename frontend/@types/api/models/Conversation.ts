/* tslint:disable */
/* eslint-disable */
/**
 * SkillSwap API
 * API for the SkillSwap skills exchange platform
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface Conversation
 */
export interface Conversation {
    /**
     * Unique identifier of the conversation
     * @type {string}
     * @memberof Conversation
     */
    id: string;
    /**
     * Identifier of the creator of the conversation
     * @type {string}
     * @memberof Conversation
     */
    creatorId: string;
    /**
     * Identifier of the partner in the conversation
     * @type {string}
     * @memberof Conversation
     */
    partnerId: string;
    /**
     * Creation date of the conversation
     * @type {Date}
     * @memberof Conversation
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the Conversation interface.
 */
export function instanceOfConversation(value: object): value is Conversation {
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("creatorId" in value) || value["creatorId"] === undefined)
        return false;
    if (!("partnerId" in value) || value["partnerId"] === undefined)
        return false;
    if (!("createdAt" in value) || value["createdAt"] === undefined)
        return false;
    return true;
}

export function ConversationFromJSON(json: any): Conversation {
    return ConversationFromJSONTyped(json, false);
}

export function ConversationFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): Conversation {
    if (json == null) {
        return json;
    }
    return {
        id: json["id"],
        creatorId: json["creatorId"],
        partnerId: json["partnerId"],
        createdAt: new Date(json["createdAt"]),
    };
}

export function ConversationToJSON(json: any): Conversation {
    return ConversationToJSONTyped(json, false);
}

export function ConversationToJSONTyped(
    value?: Conversation | null,
    ignoreDiscriminator: boolean = false
): any {
    if (value == null) {
        return value;
    }

    return {
        id: value["id"],
        creatorId: value["creatorId"],
        partnerId: value["partnerId"],
        createdAt: value["createdAt"].toISOString(),
    };
}
