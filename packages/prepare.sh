set -o errexit
set -o nounset
set -o pipefail

cd "$(dirname "$0")/.."

rm -f packages/idl/*.idl
cp ed/idl/*.idl packages/idl/
for p in ed/idlpatches/*.patch; do
    # The patches are against ed/idl/ and can be applied there using `git am`,
    # but apply them in packages/idl/ instead plain `patch`.
    # (The --binary option disables the heuristic for transforming CRLF line
    # endings into LF line endings on Windows machines)
    patch --binary -d packages/idl/ -p3 <  "$p"
done
