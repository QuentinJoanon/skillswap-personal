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

export interface ConversationControllerCreateRequest {
    body: object;
}

export interface ConversationControllerFindOneRequest {
    id: string;
}

export interface ConversationControllerRemoveRequest {
    id: string;
}

export interface ConversationControllerUpdateRequest {
    id: string;
    body: object;
}

/**
 *
 */
export class ConversationApi extends runtime.BaseAPI {
    /**
     */
    async conversationControllerCreateRaw(
        requestParameters: ConversationControllerCreateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError(
                "body",
                'Required parameter "body" was null or undefined when calling conversationControllerCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        const response = await this.request(
            {
                path: `/api/conversation`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters["body"] as any,
            },
            initOverrides
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async conversationControllerCreate(
        requestParameters: ConversationControllerCreateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<void> {
        await this.conversationControllerCreateRaw(
            requestParameters,
            initOverrides
        );
    }

    /**
     */
    async conversationControllerFindAllRaw(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request(
            {
                path: `/api/conversation`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async conversationControllerFindAll(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<void> {
        await this.conversationControllerFindAllRaw(initOverrides);
    }

    /**
     */
    async conversationControllerFindOneRaw(
        requestParameters: ConversationControllerFindOneRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<void>> {
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
                path: `/api/conversation/{id}`.replace(
                    `{${"id"}}`,
                    encodeURIComponent(String(requestParameters["id"]))
                ),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async conversationControllerFindOne(
        requestParameters: ConversationControllerFindOneRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<void> {
        await this.conversationControllerFindOneRaw(
            requestParameters,
            initOverrides
        );
    }

    /**
     */
    async conversationControllerRemoveRaw(
        requestParameters: ConversationControllerRemoveRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<void>> {
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
                path: `/api/conversation/{id}`.replace(
                    `{${"id"}}`,
                    encodeURIComponent(String(requestParameters["id"]))
                ),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async conversationControllerRemove(
        requestParameters: ConversationControllerRemoveRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<void> {
        await this.conversationControllerRemoveRaw(
            requestParameters,
            initOverrides
        );
    }

    /**
     */
    async conversationControllerUpdateRaw(
        requestParameters: ConversationControllerUpdateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError(
                "id",
                'Required parameter "id" was null or undefined when calling conversationControllerUpdate().'
            );
        }

        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError(
                "body",
                'Required parameter "body" was null or undefined when calling conversationControllerUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        const response = await this.request(
            {
                path: `/api/conversation/{id}`.replace(
                    `{${"id"}}`,
                    encodeURIComponent(String(requestParameters["id"]))
                ),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters["body"] as any,
            },
            initOverrides
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async conversationControllerUpdate(
        requestParameters: ConversationControllerUpdateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<void> {
        await this.conversationControllerUpdateRaw(
            requestParameters,
            initOverrides
        );
    }
}
