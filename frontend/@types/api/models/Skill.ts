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
 * @interface Skill
 */
export interface Skill {
    /**
     * Unique identifier for the skill
     * @type {string}
     * @memberof Skill
     */
    id: string;
    /**
     * Name of the skill
     * @type {string}
     * @memberof Skill
     */
    name: string;
    /**
     * Diminutive of the skill
     * @type {string}
     * @memberof Skill
     */
    diminutive: string;
    /**
     * Date when the skill was created
     * @type {Date}
     * @memberof Skill
     */
    createdAt: Date;
    /**
     * Date when the skill was last updated
     * @type {Date}
     * @memberof Skill
     */
    updatedAt: Date;
    /**
     * Unique identifier for the category
     * @type {string}
     * @memberof Skill
     */
    categoryId: string;
}

/**
 * Check if a given object implements the Skill interface.
 */
export function instanceOfSkill(value: object): value is Skill {
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("diminutive" in value) || value["diminutive"] === undefined)
        return false;
    if (!("createdAt" in value) || value["createdAt"] === undefined)
        return false;
    if (!("updatedAt" in value) || value["updatedAt"] === undefined)
        return false;
    if (!("categoryId" in value) || value["categoryId"] === undefined)
        return false;
    return true;
}

export function SkillFromJSON(json: any): Skill {
    return SkillFromJSONTyped(json, false);
}

export function SkillFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): Skill {
    if (json == null) {
        return json;
    }
    return {
        id: json["id"],
        name: json["name"],
        diminutive: json["diminutive"],
        createdAt: new Date(json["createdAt"]),
        updatedAt: new Date(json["updatedAt"]),
        categoryId: json["categoryId"],
    };
}

export function SkillToJSON(json: any): Skill {
    return SkillToJSONTyped(json, false);
}

export function SkillToJSONTyped(
    value?: Skill | null,
    ignoreDiscriminator: boolean = false
): any {
    if (value == null) {
        return value;
    }

    return {
        id: value["id"],
        name: value["name"],
        diminutive: value["diminutive"],
        createdAt: value["createdAt"].toISOString(),
        updatedAt: value["updatedAt"].toISOString(),
        categoryId: value["categoryId"],
    };
}
