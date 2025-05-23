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

import * as runtime from "../runtime";
import type {
    Conversation,
    CreateConversationDto,
    UpdateConversationDto,
} from "../models/index";
import {
    ConversationFromJSON,
    ConversationToJSON,
    CreateConversationDtoFromJSON,
    CreateConversationDtoToJSON,
    UpdateConversationDtoFromJSON,
    UpdateConversationDtoToJSON,
} from "../models/index";

export interface ConversationControllerCreateRequest {
    createConversationDto: CreateConversationDto;
}

export interface ConversationControllerFindOneRequest {
    id: string;
}

export interface ConversationControllerRemoveRequest {
    id: string;
}

export interface ConversationControllerUpdateRequest {
    id: string;
    updateConversationDto: UpdateConversationDto;
}

/**
 *
 */
export class ConversationsApi extends runtime.BaseAPI {
    /**
     * Create a new conversation
     */
    async conversationControllerCreateRaw(
        requestParameters: ConversationControllerCreateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<Conversation>> {
        if (requestParameters["createConversationDto"] == null) {
            throw new runtime.RequiredError(
                "createConversationDto",
                'Required parameter "createConversationDto" was null or undefined when calling conversationControllerCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        const response = await this.request(
            {
                path: `/api/conversations`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: CreateConversationDtoToJSON(
                    requestParameters["createConversationDto"]
                ),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) =>
            ConversationFromJSON(jsonValue)
        );
    }

    /**
     * Create a new conversation
     */
    async conversationControllerCreate(
        requestParameters: ConversationControllerCreateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<Conversation> {
        const response = await this.conversationControllerCreateRaw(
            requestParameters,
            initOverrides
        );
        return await response.value();
    }

    /**
     * Get all conversations
     */
    async conversationControllerFindAllRaw(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<Array<Conversation>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request(
            {
                path: `/api/conversations`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) =>
            jsonValue.map(ConversationFromJSON)
        );
    }

    /**
     * Get all conversations
     */
    async conversationControllerFindAll(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<Array<Conversation>> {
        const response =
            await this.conversationControllerFindAllRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get all conversations for the current user
     */
    async conversationControllerFindMyConversationsRaw(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<Array<Conversation>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request(
            {
                path: `/api/conversations/user/me`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) =>
            jsonValue.map(ConversationFromJSON)
        );
    }

    /**
     * Get all conversations for the current user
     */
    async conversationControllerFindMyConversations(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<Array<Conversation>> {
        const response =
            await this.conversationControllerFindMyConversationsRaw(
                initOverrides
            );
        return await response.value();
    }

    /**
     * Get a conversation by its ID
     */
    async conversationControllerFindOneRaw(
        requestParameters: ConversationControllerFindOneRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<Conversation>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError(
                "id",
                'Required parameter "id" was null or undefined when calling conversationControllerFindOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request(
            {
                path: `/api/conversations/{id}`.replace(
                    `{${"id"}}`,
                    encodeURIComponent(String(requestParameters["id"]))
                ),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) =>
            ConversationFromJSON(jsonValue)
        );
    }

    /**
     * Get a conversation by its ID
     */
    async conversationControllerFindOne(
        requestParameters: ConversationControllerFindOneRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<Conversation> {
        const response = await this.conversationControllerFindOneRaw(
            requestParameters,
            initOverrides
        );
        return await response.value();
    }

    /**
     * Delete a conversation
     */
    async conversationControllerRemoveRaw(
        requestParameters: ConversationControllerRemoveRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<Conversation>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError(
                "id",
                'Required parameter "id" was null or undefined when calling conversationControllerRemove().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request(
            {
                path: `/api/conversations/{id}`.replace(
                    `{${"id"}}`,
                    encodeURIComponent(String(requestParameters["id"]))
                ),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) =>
            ConversationFromJSON(jsonValue)
        );
    }

    /**
     * Delete a conversation
     */
    async conversationControllerRemove(
        requestParameters: ConversationControllerRemoveRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<Conversation> {
        const response = await this.conversationControllerRemoveRaw(
            requestParameters,
            initOverrides
        );
        return await response.value();
    }

    /**
     * Update an existing conversation
     */
    async conversationControllerUpdateRaw(
        requestParameters: ConversationControllerUpdateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<Conversation>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError(
                "id",
                'Required parameter "id" was null or undefined when calling conversationControllerUpdate().'
            );
        }

        if (requestParameters["updateConversationDto"] == null) {
            throw new runtime.RequiredError(
                "updateConversationDto",
                'Required parameter "updateConversationDto" was null or undefined when calling conversationControllerUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        const response = await this.request(
            {
                path: `/api/conversations/{id}`.replace(
                    `{${"id"}}`,
                    encodeURIComponent(String(requestParameters["id"]))
                ),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: UpdateConversationDtoToJSON(
                    requestParameters["updateConversationDto"]
                ),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) =>
            ConversationFromJSON(jsonValue)
        );
    }

    /**
     * Update an existing conversation
     */
    async conversationControllerUpdate(
        requestParameters: ConversationControllerUpdateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<Conversation> {
        const response = await this.conversationControllerUpdateRaw(
            requestParameters,
            initOverrides
        );
        return await response.value();
    }
}
