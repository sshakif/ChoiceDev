<?php

declare(strict_types=1);

namespace Flat3\Lodata\Attributes;

use Attribute;
use Flat3\Lodata\EnumerationType;
use Flat3\Lodata\Facades\Lodata;
use Flat3\Lodata\Type;

#[Attribute(Attribute::TARGET_CLASS | Attribute::IS_REPEATABLE)]
class LodataEnum extends LodataProperty
{
    /** @var string */
    protected $enum;

    public function __construct(
        string $name,
        string $enum,
        ?string $description = null,
        ?string $source = null,
        ?bool $nullable = true,
        ?bool $immutable = false
    ) {
        parent::__construct($name, $description, $source);
        $this->nullable = $nullable;
        $this->immutable = $immutable;
        $this->enum = $enum;
    }

    public function getEnum(): string
    {
        return $this->enum;
    }

    public function getType(): Type
    {
        if (EnumerationType::isEnum($this->enum)) {
            return EnumerationType::discover($this->enum);
        }

        return Lodata::getEnumerationType($this->enum);
    }
}
