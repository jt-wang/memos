// @generated by protoc-gen-es v1.3.0
// @generated from file api/v2/user_service.proto (package memos.api.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { RowStatus } from "./common_pb.js";
import { Visibility } from "./memo_service_pb.js";

/**
 * @generated from enum memos.api.v2.Role
 */
export const Role = proto3.makeEnum(
  "memos.api.v2.Role",
  [
    {no: 0, name: "ROLE_UNSPECIFIED"},
    {no: 1, name: "HOST"},
    {no: 2, name: "ADMIN"},
    {no: 3, name: "USER"},
  ],
);

/**
 * @generated from message memos.api.v2.User
 */
export const User = proto3.makeMessageType(
  "memos.api.v2.User",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "row_status", kind: "enum", T: proto3.getEnumType(RowStatus) },
    { no: 3, name: "created_ts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "updated_ts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "role", kind: "enum", T: proto3.getEnumType(Role) },
    { no: 7, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "nickname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "open_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message memos.api.v2.GetUserRequest
 */
export const GetUserRequest = proto3.makeMessageType(
  "memos.api.v2.GetUserRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message memos.api.v2.GetUserResponse
 */
export const GetUserResponse = proto3.makeMessageType(
  "memos.api.v2.GetUserResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: User },
  ],
);

/**
 * @generated from message memos.api.v2.UserSetting
 */
export const UserSetting = proto3.makeMessageType(
  "memos.api.v2.UserSetting",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "key", kind: "enum", T: proto3.getEnumType(UserSetting_Key) },
    { no: 3, name: "value", kind: "message", T: UserSettingValue },
  ],
);

/**
 * @generated from enum memos.api.v2.UserSetting.Key
 */
export const UserSetting_Key = proto3.makeEnum(
  "memos.api.v2.UserSetting.Key",
  [
    {no: 0, name: "KEY_UNSPECIFIED"},
    {no: 1, name: "LOCALE"},
    {no: 2, name: "APPEARANCE"},
    {no: 3, name: "MEMO_VISIBILITY"},
    {no: 4, name: "TELEGRAM_USER_ID"},
  ],
);

/**
 * @generated from message memos.api.v2.UserSettingValue
 */
export const UserSettingValue = proto3.makeMessageType(
  "memos.api.v2.UserSettingValue",
  () => [
    { no: 1, name: "string_value", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value" },
    { no: 2, name: "visibility_value", kind: "enum", T: proto3.getEnumType(Visibility), oneof: "value" },
  ],
);
