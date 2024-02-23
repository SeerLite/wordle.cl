{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-23.11";
  };

  outputs = { self, nixpkgs }:
  let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages."${system}";
  in
  {
    devShells.x86_64-linux.default = pkgs.mkShell {
      packages = [ pkgs.nodejs ];
    };
  };
}
