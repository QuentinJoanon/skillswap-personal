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
import type { CreateMessageDto } from "./CreateMessageDto";
import {
    CreateMessageDtoFromJSON,
    CreateMessageDtoFromJSONTyped,
    CreateMessageDtoToJSON,
    CreateMessageDtoToJSONTyped,
} from "./CreateMessageDto";

/**
 *
 * @export
 * @interface UpdateConversationDto
 */
export interface UpdateConversationDto {
    /**
     * List of messages associated with the conversation
     * @type {Array<CreateMessageDto>}
     * @memberof UpdateConversationDto
     */
    messages?: Array<CreateMessageDto>;
    /**
     * Identifier of the creator of the conversation
     * @type {string}
     * @memberof UpdateConversationDto
     */
    creatorId?: string;
    /**
     * Identifier of the partner of the conversation
     * @type {string}
     * @memberof UpdateConversationDto
     */
    partnerId?: string;
}

/**
 * Check if a given object implements the UpdateConversationDto interface.
 */
export function instanceOfUpdateConversationDto(
    value: object
): value is UpdateConversationDto {
    return true;
}

export function UpdateConversationDtoFromJSON(
    json: any
): UpdateConversationDto {
    return UpdateConversationDtoFromJSONTyped(json, false);
}

export function UpdateConversationDtoFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): UpdateConversationDto {
    if (json == null) {
        return json;
    }
    return {
        messages:
            json["messages"] == null
                ? undefined
                : (json["messages"] as Array<any>).map(
                      CreateMessageDtoFromJSON
                  ),
        creatorId: json["creatorId"] == null ? undefined : json["creatorId"],
        partnerId: json["partnerId"] == null ? undefined : json["partnerId"],
    };
}

export function UpdateConversationDtoToJSON(json: any): UpdateConversationDto {
    return UpdateConversationDtoToJSONTyped(json, false);
}

export function UpdateConversationDtoToJSONTyped(
    value?: UpdateConversationDto | null,
    ignoreDiscriminator: boolean = false
): any {
    if (value == null) {
        return value;
    }

    return {
        messages:
            value["messages"] == null
                ? undefined
                : (value["messages"] as Array<any>).map(CreateMessageDtoToJSON),
        creatorId: value["creatorId"],
        partnerId: value["partnerId"],
    };
}
