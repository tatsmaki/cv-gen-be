import { IsIn, IsInt, IsString, Max } from "class-validator";
import { DeleteAvatarInput, UploadAvatarInput } from "src/graphql";

export class UploadAvatarDto implements UploadAvatarInput {
  @IsString()
  profileId: string;

  @IsString()
  base64: string;

  @IsInt()
  @Max(500_000)
  size: number;

  @IsString()
  @IsIn(["image/jpeg", "image/png", "image/gif", "image/svg+xml"])
  type: string;
}

export class DeleteAvatarDto implements DeleteAvatarInput {
  @IsString()
  profileId: string;
}
